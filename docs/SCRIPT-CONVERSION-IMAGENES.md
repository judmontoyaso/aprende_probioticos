# Script para reemplazar placeholders por imágenes reales

Este script PowerShell automatiza la conversión de placeholders por imágenes reales una vez que estén disponibles.

## Uso

```powershell
# Ejecutar desde la raíz del proyecto
.\scripts\replace-placeholders.ps1
```

## Qué hace

1. Verifica que existan las imágenes en `/public/images/`
2. Reemplaza los placeholders en `OptimizedImagePlaceholder.tsx`
3. Actualiza las rutas en el homepage
4. Optimiza automáticamente las imágenes para Next.js

## Imágenes requeridas

Coloca estas imágenes en `public/images/`:

- `probiotics-hero.png` (1200x630px) - Imagen principal hero
- `beneficios-probioticos-salud.png` (800x400px) - Infografía de beneficios  
- `tipos-probioticos-lactobacillus-bifidobacterium.png` (600x300px) - Bacterias
- `alimentos-fermentados-yogur-kefir.png` (500x350px) - Alimentos fermentados
- `suplementos-probioticos-capsulas.png` (500x350px) - Suplementos en cápsulas
- `eje-intestino-cerebro-conexion.png` (500x350px) - Conexión cerebro-intestino

## Script PowerShell

```powershell
# replace-placeholders.ps1

# Verificar que estamos en la raíz del proyecto
if (!(Test-Path "package.json")) {
    Write-Error "Ejecuta este script desde la raíz del proyecto Next.js"
    exit 1
}

# Crear directorio de imágenes si no existe
if (!(Test-Path "public/images")) {
    New-Item -ItemType Directory -Path "public/images" -Force
}

# Lista de imágenes requeridas
$imagenes = @(
    @{file="probiotics-hero.png"; width=1200; height=630},
    @{file="beneficios-probioticos-salud.png"; width=800; height=400},
    @{file="tipos-probioticos-lactobacillus-bifidobacterium.png"; width=600; height=300},
    @{file="alimentos-fermentados-yogur-kefir.png"; width=500; height=350},
    @{file="suplementos-probioticos-capsulas.png"; width=500; height=350},
    @{file="eje-intestino-cerebro-conexion.png"; width=500; height=350}
)

# Verificar imágenes existentes
$imagenesEncontradas = @()
$imagenesFaltantes = @()

foreach ($img in $imagenes) {
    $path = "public/images/$($img.file)"
    if (Test-Path $path) {
        $imagenesEncontradas += $img
        Write-Host "✓ Encontrada: $($img.file)" -ForegroundColor Green
    } else {
        $imagenesFaltantes += $img
        Write-Host "✗ Falta: $($img.file)" -ForegroundColor Red
    }
}

if ($imagenesFaltantes.Count -gt 0) {
    Write-Host "`n⚠️  Faltan $($imagenesFaltantes.Count) imágenes por agregar:" -ForegroundColor Yellow
    foreach ($img in $imagenesFaltantes) {
        Write-Host "   - $($img.file) ($($img.width)x$($img.height)px)" -ForegroundColor Yellow
    }
    Write-Host "`nPor favor, coloca las imágenes en public/images/ antes de continuar."
    Read-Host "Presiona Enter cuando hayas agregado las imágenes..."
}

# Función para actualizar OptimizedImagePlaceholder.tsx
function Update-ImageComponent {
    $componentPath = "app/components/OptimizedImagePlaceholder.tsx"
    $content = Get-Content $componentPath -Raw
    
    # Reemplazar lógica de placeholder
    $newContent = $content -replace 
        'const isPlaceholder = src\.startsWith\('\''/placeholder/'\''\) \|\| src\.includes\('\'placeholder'\''\);',
        'const isPlaceholder = false; // Todas las imágenes están disponibles'
    
    Set-Content $componentPath $newContent
    Write-Host "✓ Actualizado OptimizedImagePlaceholder.tsx" -ForegroundColor Green
}

# Función para actualizar página principal
function Update-HomePage {
    $homePath = "app/page.tsx"
    $content = Get-Content $homePath -Raw
    
    # Reemplazar rutas de placeholder por rutas reales
    $replacements = @{
        '/placeholder/probiotics-hero.png' = '/images/probiotics-hero.png'
        '/placeholder/beneficios-probioticos-salud.png' = '/images/beneficios-probioticos-salud.png'  
        '/placeholder/tipos-probioticos-lactobacillus-bifidobacterium.png' = '/images/tipos-probioticos-lactobacillus-bifidobacterium.png'
        '/placeholder/alimentos-fermentados-yogur-kefir.png' = '/images/alimentos-fermentados-yogur-kefir.png'
        '/placeholder/suplementos-probioticos-capsulas.png' = '/images/suplementos-probioticos-capsulas.png'
    }
    
    $newContent = $content
    foreach ($replacement in $replacements.GetEnumerator()) {
        $newContent = $newContent -replace [regex]::Escape($replacement.Key), $replacement.Value
    }
    
    Set-Content $homePath $newContent
    Write-Host "✓ Actualizada página principal con rutas reales" -ForegroundColor Green
}

# Ejecutar actualizaciones si todas las imágenes están disponibles
if ($imagenesFaltantes.Count -eq 0) {
    Write-Host "`n🚀 Todas las imágenes encontradas. Actualizando código..." -ForegroundColor Green
    
    Update-ImageComponent
    Update-HomePage
    
    Write-Host "`n✅ ¡Conversión completada exitosamente!" -ForegroundColor Green
    Write-Host "Las imágenes placeholder han sido reemplazadas por las imágenes reales." -ForegroundColor Green
    Write-Host "`nEjecuta 'npm run build' para verificar que todo funcione correctamente." -ForegroundColor Yellow
} else {
    Write-Host "`n⏸️  Conversión pausada. Completa las imágenes faltantes primero." -ForegroundColor Yellow
}
```

## Verificación post-conversión

Después de ejecutar el script:

```powershell
# Verificar build
npm run build

# Verificar optimización de imágenes
npm run dev
# Visita http://localhost:3000 y verifica que las imágenes cargan correctamente
```

## Troubleshooting

- **Error "Module not found"**: Verifica que las imágenes estén en `public/images/`
- **Imágenes no optimizadas**: Next.js las optimizará automáticamente en el primer uso
- **Layout shifts**: Las dimensiones están definidas para prevenir CLS
