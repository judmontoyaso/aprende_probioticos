# replace-placeholders.ps1
# Script para convertir placeholders de imágenes por imágenes reales

param(
    [switch]$Force,
    [switch]$Check
)

# Verificar que estamos en la raíz del proyecto
if (!(Test-Path "package.json")) {
    Write-Error "❌ Ejecuta este script desde la raíz del proyecto Next.js"
    exit 1
}

Write-Host "🔄 Iniciando conversión de placeholders a imágenes reales..." -ForegroundColor Cyan

# Crear directorio de imágenes si no existe
if (!(Test-Path "public/images")) {
    New-Item -ItemType Directory -Path "public/images" -Force
    Write-Host "📁 Creado directorio public/images/" -ForegroundColor Green
}

# Lista de imágenes requeridas con sus especificaciones
$imagenes = @(
    @{
        file="probiotics-hero.png"
        width=1200
        height=630
        description="Imagen principal hero - Sistema digestivo con probióticos"
        priority="Alta - SEO crítico"
    },
    @{
        file="beneficios-probioticos-salud.png"
        width=800
        height=400
        description="Infografía de beneficios para la salud"
        priority="Alta - Engagement"
    },
    @{
        file="tipos-probioticos-lactobacillus-bifidobacterium.png"
        width=600
        height=300
        description="Ilustración de bacterias Lactobacillus y Bifidobacterium"
        priority="Media - Educativa"
    },
    @{
        file="alimentos-fermentados-yogur-kefir.png"
        width=500
        height=350
        description="Variedad de alimentos fermentados"
        priority="Media - Informativa"
    },
    @{
        file="suplementos-probioticos-capsulas.png"
        width=500
        height=350
        description="Suplementos probióticos en cápsulas"
        priority="Media - Comercial"
    },
    @{
        file="eje-intestino-cerebro-conexion.png"
        width=500
        height=350
        description="Conexión eje intestino-cerebro"
        priority="Baja - Complementaria"
    }
)

# Verificar estado de imágenes
$imagenesEncontradas = @()
$imagenesFaltantes = @()

Write-Host "`n📋 Estado de las imágenes requeridas:" -ForegroundColor Yellow
Write-Host "=" * 60

foreach ($img in $imagenes) {
    $path = "public/images/$($img.file)"
    if (Test-Path $path) {
        $fileInfo = Get-Item $path
        $imagenesEncontradas += $img
        Write-Host "✅ $($img.file)" -ForegroundColor Green
        Write-Host "   📐 Tamaño esperado: $($img.width)x$($img.height)px" -ForegroundColor Gray
        Write-Host "   💾 Tamaño archivo: $([math]::Round($fileInfo.Length/1KB, 1)) KB" -ForegroundColor Gray
        Write-Host "   🎯 $($img.description)" -ForegroundColor Gray
        Write-Host ""
    } else {
        $imagenesFaltantes += $img
        Write-Host "❌ $($img.file)" -ForegroundColor Red
        Write-Host "   📐 Requerido: $($img.width)x$($img.height)px" -ForegroundColor Gray
        Write-Host "   🎯 $($img.description)" -ForegroundColor Gray
        Write-Host "   ⭐ Prioridad: $($img.priority)" -ForegroundColor Gray
        Write-Host ""
    }
}

# Modo solo verificación
if ($Check) {
    Write-Host "📊 Resumen:" -ForegroundColor Cyan
    Write-Host "   ✅ Encontradas: $($imagenesEncontradas.Count)/$($imagenes.Count)" -ForegroundColor Green
    Write-Host "   ❌ Faltantes: $($imagenesFaltantes.Count)/$($imagenes.Count)" -ForegroundColor Red
    
    if ($imagenesFaltantes.Count -eq 0) {
        Write-Host "`n🎉 ¡Todas las imágenes están listas para la conversión!" -ForegroundColor Green
    }
    exit 0
}

# Mostrar resumen
Write-Host "📊 Resumen del estado:" -ForegroundColor Cyan
Write-Host "   ✅ Imágenes encontradas: $($imagenesEncontradas.Count)/$($imagenes.Count)" -ForegroundColor Green
Write-Host "   ❌ Imágenes faltantes: $($imagenesFaltantes.Count)/$($imagenes.Count)" -ForegroundColor Red

if ($imagenesFaltantes.Count -gt 0 -and -not $Force) {
    Write-Host "`n⚠️  Faltan imágenes críticas:" -ForegroundColor Yellow
    foreach ($img in $imagenesFaltantes) {
        Write-Host "   • $($img.file) - $($img.priority)" -ForegroundColor Yellow
    }
    Write-Host "`n💡 Opciones:" -ForegroundColor Cyan
    Write-Host "   1. Agrega las imágenes a public/images/ y ejecuta nuevamente"
    Write-Host "   2. Usa -Force para convertir solo las disponibles"
    Write-Host "   3. Revisa ESPECIFICACIONES_IMAGENES.md para detalles"
    
    $continuar = Read-Host "`n¿Continuar con conversión parcial? (s/N)"
    if ($continuar -ne 's' -and $continuar -ne 'S') {
        Write-Host "❌ Conversión cancelada." -ForegroundColor Red
        exit 1
    }
}

# Función para hacer backup
function New-Backup {
    param($filePath)
    $backupPath = $filePath + ".backup-" + (Get-Date -Format "yyyyMMdd-HHmmss")
    Copy-Item $filePath $backupPath
    Write-Host "💾 Backup creado: $(Split-Path $backupPath -Leaf)" -ForegroundColor Gray
}

# Función para actualizar componente OptimizedImagePlaceholder
function Update-ImageComponent {
    $componentPath = "app/components/OptimizedImagePlaceholder.tsx"
    
    if (!(Test-Path $componentPath)) {
        Write-Error "❌ No se encuentra OptimizedImagePlaceholder.tsx"
        return $false
    }
    
    New-Backup $componentPath
    $content = Get-Content $componentPath -Raw
    
    # Reemplazar lógica de placeholder
    $newContent = $content -replace 
        'const isPlaceholder = src\.startsWith\('\''/placeholder/'\''\) \|\| src\.includes\('\'placeholder'\''\);',
        'const isPlaceholder = src.startsWith('\''/placeholder/'\'') || src.includes(''placeholder'\''); // Verificación automática'
    
    # Agregar comentario de conversión
    $newContent = $newContent -replace 
        '(\* Incluye lazy loading, optimización automática y fallbacks)',
        '$1' + "`n * 🔄 Conversión automática completada: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    
    Set-Content $componentPath $newContent -Encoding UTF8
    Write-Host "✅ Actualizado OptimizedImagePlaceholder.tsx" -ForegroundColor Green
    return $true
}

# Función para actualizar página principal
function Update-HomePage {
    $homePath = "app/page.tsx"
    
    if (!(Test-Path $homePath)) {
        Write-Error "❌ No se encuentra app/page.tsx"
        return $false
    }
    
    New-Backup $homePath
    $content = Get-Content $homePath -Raw
    
    # Reemplazar rutas de placeholder por rutas reales solo para imágenes encontradas
    $replacements = @{}
    
    foreach ($img in $imagenesEncontradas) {
        $placeholderPath = "/placeholder/$($img.file)"
        $realPath = "/images/$($img.file)"
        $replacements[$placeholderPath] = $realPath
    }
    
    $newContent = $content
    $reemplazos = 0
    
    foreach ($replacement in $replacements.GetEnumerator()) {
        $count = ([regex]::Matches($newContent, [regex]::Escape($replacement.Key))).Count
        if ($count -gt 0) {
            $newContent = $newContent -replace [regex]::Escape($replacement.Key), $replacement.Value
            $reemplazos += $count
            Write-Host "   🔄 $($replacement.Key) → $($replacement.Value) ($count ocurrencias)" -ForegroundColor Gray
        }
    }
    
    Set-Content $homePath $newContent -Encoding UTF8
    Write-Host "✅ Página principal actualizada ($reemplazos reemplazos)" -ForegroundColor Green
    return $true
}

# Función para generar reporte
function New-ConversionReport {
    $reportPath = "docs/REPORTE-CONVERSION-$(Get-Date -Format 'yyyyMMdd-HHmm').md"
    
    $report = @"
# Reporte de Conversión de Imágenes Placeholder

**Fecha:** $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
**Total imágenes:** $($imagenes.Count)
**Convertidas:** $($imagenesEncontradas.Count)
**Pendientes:** $($imagenesFaltantes.Count)

## ✅ Imágenes Convertidas

$($imagenesEncontradas | ForEach-Object { "- ✅ $($_.file) ($($_.width)x$($_.height)px) - $($_.description)" } | Out-String)

## ❌ Imágenes Pendientes

$($imagenesFaltantes | ForEach-Object { "- ❌ $($_.file) ($($_.width)x$($_.height)px) - $($_.description) - **$($_.priority)**" } | Out-String)

## 🚀 Próximos Pasos

1. Crear las imágenes pendientes según especificaciones en ESPECIFICACIONES_IMAGENES.md
2. Ejecutar nuevamente el script: ``````powershell scripts\replace-placeholders.ps1``````
3. Verificar build: ``````npm run build``````
4. Probar localmente: ``````npm run dev``````

## 🔧 Archivos Modificados

- ✅ app/components/OptimizedImagePlaceholder.tsx
- ✅ app/page.tsx
- 💾 Backups creados con timestamp

---
*Generado automáticamente por replace-placeholders.ps1*
"@

    Set-Content $reportPath $report -Encoding UTF8
    Write-Host "📋 Reporte generado: $(Split-Path $reportPath -Leaf)" -ForegroundColor Green
}

# Ejecutar conversión
Write-Host "`n🚀 Iniciando conversión de código..." -ForegroundColor Green

$componentOk = Update-ImageComponent
$homePageOk = Update-HomePage

if ($componentOk -and $homePageOk) {
    New-ConversionReport
    
    Write-Host "`n🎉 ¡Conversión completada exitosamente!" -ForegroundColor Green
    Write-Host "📈 Estadísticas:" -ForegroundColor Cyan
    Write-Host "   ✅ Imágenes convertidas: $($imagenesEncontradas.Count)/$($imagenes.Count)" -ForegroundColor Green
    Write-Host "   🔄 Archivos modificados: 2" -ForegroundColor Yellow
    Write-Host "   💾 Backups creados: 2" -ForegroundColor Gray
    
    if ($imagenesFaltantes.Count -gt 0) {
        Write-Host "`n⚠️  Nota: Quedan $($imagenesFaltantes.Count) imágenes por convertir" -ForegroundColor Yellow
        Write-Host "   Ejecuta el script nuevamente cuando estén disponibles." -ForegroundColor Yellow
    }
    
    Write-Host "`n📋 Verificación recomendada:" -ForegroundColor Cyan
    Write-Host "   1. npm run build     # Verificar que compila sin errores"
    Write-Host "   2. npm run dev       # Probar en desarrollo"
    Write-Host "   3. Revisar imágenes en http://localhost:3000"
    
} else {
    Write-Host "`n❌ Error durante la conversión. Revisa los archivos." -ForegroundColor Red
    exit 1
}
