import type { MDXComponents } from 'mdx/types';
import { mdxComponents } from './app/blog/components/MDXComponents';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
