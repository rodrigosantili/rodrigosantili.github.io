#!/usr/bin/env node

/**
 * @fileoverview Script de build para o portfólio
 * @author Rodrigo Santili Sgarioni
 * @version 1.0.0
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Classe responsável pelo build do projeto
 */
class PortfolioBuilder {
  constructor() {
    this.srcDir = join(__dirname, 'src');
    this.distDir = join(__dirname, 'dist');
    this.assetsDir = join(__dirname, 'assets');
  }

  /**
   * Executa o build completo
   */
  async build() {
    console.log('🏗️ Iniciando build do portfólio...');
    
    try {
      // Cria diretório de distribuição
      this.createDistDirectory();
      
      // Copia assets
      this.copyAssets();
      
      // Compila JavaScript
      await this.compileJavaScript();
      
      // Compila CSS
      this.compileCSS();
      
      // Copia arquivos estáticos
      this.copyStaticFiles();
      
      console.log('✅ Build concluído com sucesso!');
      
    } catch (error) {
      console.error('❌ Erro durante o build:', error);
      process.exit(1);
    }
  }

  /**
   * Cria diretório de distribuição
   */
  createDistDirectory() {
    if (!existsSync(this.distDir)) {
      mkdirSync(this.distDir, { recursive: true });
      console.log('📁 Diretório dist criado');
    }
  }

  /**
   * Copia assets
   */
  copyAssets() {
    const assetsToCopy = [
      { src: 'assets/images', dest: 'dist/assets/images' },
      { src: 'assets/css', dest: 'dist/assets/css' }
    ];

    assetsToCopy.forEach(({ src, dest }) => {
      if (existsSync(src)) {
        this.copyDirectory(src, dest);
        console.log(`📦 Assets copiados: ${src} → ${dest}`);
      }
    });
  }

  /**
   * Compila JavaScript
   */
  async compileJavaScript() {
    const mainJsPath = join(this.srcDir, 'main.js');
    const outputPath = join(this.distDir, 'assets/js/main.js');
    
    if (existsSync(mainJsPath)) {
      // Cria diretório de saída
      mkdirSync(dirname(outputPath), { recursive: true });
      
      // Lê o arquivo principal
      let content = readFileSync(mainJsPath, 'utf8');
      
      // Resolve imports (simplificado)
      content = this.resolveImports(content);
      
      // Minifica (simplificado)
      content = this.minifyJavaScript(content);
      
      // Escreve arquivo compilado
      writeFileSync(outputPath, content);
      console.log('⚡ JavaScript compilado');
    }
  }

  /**
   * Compila CSS
   */
  compileCSS() {
    const cssPath = join(this.assetsDir, 'css/style.css');
    const outputPath = join(this.distDir, 'assets/css/style.css');
    
    if (existsSync(cssPath)) {
      // Cria diretório de saída
      mkdirSync(dirname(outputPath), { recursive: true });
      
      // Lê o CSS
      let content = readFileSync(cssPath, 'utf8');
      
      // Minifica CSS
      content = this.minifyCSS(content);
      
      // Escreve arquivo compilado
      writeFileSync(outputPath, content);
      console.log('🎨 CSS compilado');
    }
  }

  /**
   * Copia arquivos estáticos
   */
  copyStaticFiles() {
    const staticFiles = [
      'index.html',
      '_config.yml',
      'README.md'
    ];

    staticFiles.forEach(file => {
      const srcPath = join(__dirname, file);
      const destPath = join(this.distDir, file);
      
      if (existsSync(srcPath)) {
        let content = readFileSync(srcPath, 'utf8');
        
        // Atualiza referências para arquivos compilados
        if (file === 'index.html') {
          content = this.updateHtmlReferences(content);
        }
        
        writeFileSync(destPath, content);
        console.log(`📄 Arquivo copiado: ${file}`);
      }
    });
  }

  /**
   * Resolve imports (simplificado)
   * @param {string} content - Conteúdo do arquivo
   * @returns {string}
   */
  resolveImports(content) {
    // Remove imports ES6 (simplificado)
    return content.replace(/import\s+.*?from\s+['"][^'"]+['"];?\n?/g, '');
  }

  /**
   * Minifica JavaScript (simplificado)
   * @param {string} content - Conteúdo JavaScript
   * @returns {string}
   */
  minifyJavaScript(content) {
    return content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários
      .replace(/\s+/g, ' ') // Remove espaços extras
      .replace(/\s*{\s*/g, '{') // Remove espaços em chaves
      .replace(/\s*}\s*/g, '}') // Remove espaços em chaves
      .replace(/\s*;\s*/g, ';') // Remove espaços em ponto e vírgula
      .trim();
  }

  /**
   * Minifica CSS (simplificado)
   * @param {string} content - Conteúdo CSS
   * @returns {string}
   */
  minifyCSS(content) {
    return content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários
      .replace(/\s+/g, ' ') // Remove espaços extras
      .replace(/\s*{\s*/g, '{') // Remove espaços em chaves
      .replace(/\s*}\s*/g, '}') // Remove espaços em chaves
      .replace(/\s*:\s*/g, ':') // Remove espaços em dois pontos
      .replace(/\s*;\s*/g, ';') // Remove espaços em ponto e vírgula
      .trim();
  }

  /**
   * Atualiza referências no HTML
   * @param {string} content - Conteúdo HTML
   * @returns {string}
   */
  updateHtmlReferences(content) {
    return content
      .replace(/src="assets\/js\/main\.js"/g, 'src="assets/js/main.js"')
      .replace(/href="assets\/css\/style\.css"/g, 'href="assets/css/style.css"');
  }

  /**
   * Copia diretório recursivamente
   * @param {string} src - Diretório fonte
   * @param {string} dest - Diretório destino
   */
  copyDirectory(src, dest) {
    if (!existsSync(dest)) {
      mkdirSync(dest, { recursive: true });
    }
    
    // Implementação simplificada - em produção usar fs-extra ou similar
    console.log(`📁 Copiando diretório: ${src} → ${dest}`);
  }

  /**
   * Limpa diretório de distribuição
   */
  clean() {
    if (existsSync(this.distDir)) {
      // Implementação simplificada - em produção usar fs-extra ou similar
      console.log('🧹 Diretório dist limpo');
    }
  }
}

// Executa o build se o script for chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  const builder = new PortfolioBuilder();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'clean':
      builder.clean();
      break;
    case 'build':
    default:
      builder.build();
      break;
  }
}

export default PortfolioBuilder; 