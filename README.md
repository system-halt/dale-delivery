# Dale Delivery - Landing Page

## Descripción
Sitio web moderno para Dale Delivery, empresa de envíos rápidos en Lima y Callao.

## Características

### 🎨 Diseño Moderno
- **Navbar fijo**: Permanece visible al hacer scroll dsafasdasf
- **Animaciones suaves**: Elementos que aparecen al hacer scroll
- **Diseño responsivo**: Optimizado para móviles y desktop
- **Gradientes modernos**: Colores vibrantes y atractivos

### 🚀 Tecnologías
- **Astro 5**: Framework moderno para sitios web
- **Tailwind CSS**: Clases utilitarias para estilos
- **TypeScript**: Tipado estático para mejor desarrollo
- **Componentes reutilizables**: Arquitectura modular

### 📱 Secciones
1. **Hero Section**: Llamada principal con botones CTA
2. **Servicios**: Same Day, Next Day y planes de envío
3. **¿Por qué elegirnos?**: 6 razones con íconos y animaciones
4. **Contacto**: Formulario completo con validación visual 151325525rr
5. **Footer**: Información completa de la empresa

### 🎯 Funcionalidades
- **Scroll suave** entre secciones
- **Menú móvil** funcional
- **Animaciones on-scroll** con Intersection Observer
- **Formulario de contacto** estilizado
- **Efectos hover** en botones y cards

### 🎨 Sistema de Diseño

#### Colores
- **Primary**: Naranja (#f97316) - Color principal de la marca
- **Secondary**: Azul (#0ea5e9) - Color de apoyo
- **Neutral**: Grises para textos y fondos

#### Tipografía
- **Display**: Poppins (títulos)
- **Sans**: Inter (textos)

#### Espaciado
- Sistema basado en Tailwind (4px, 8px, 16px, etc.)
- Espaciado consistente entre secciones

#### Bordes
- Rounded corners modernos (xl, 2xl, 4xl)
- Sombras sutiles para profundidad

### 📁 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro          # Layout principal
├── components/
│   ├── Header.astro          # Navegación fija
│   ├── HeroSection.astro     # Sección principal
│   ├── ServicesSection.astro # Servicios
│   ├── WhyChooseUs.astro     # Características
│   ├── ContactSection.astro  # Formulario
│   ├── Footer.astro          # Pie de página
│   └── Card.astro            # Componente reutilizable
├── pages/
│   └── index.astro           # Página principal
└── env.d.ts                  # Tipos TypeScript
```

### 🎯 SEO y Performance
- Meta tags optimizados
- Imágenes optimizadas (usar formato WebP)
- Carga lazy de componentes
- Código minificado en producción

### 📱 Responsive Design
- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Componentes adaptativos**: Grid que se ajusta según pantalla

### 🎨 Mejores Prácticas Implementadas
1. **Componentes reutilizables**: Card component con props
2. **Nomenclatura consistente**: BEM-like para clases CSS
3. **Animaciones progresivas**: Mejoran sin bloquear
4. **Accesibilidad**: Contrastes adecuados y navegación por teclado
5. **Performance**: Lazy loading y optimización de assets

