# Architecture Style: Clean Architecture

Proyecto de aprendizaje en **Astro + React** que organiza el frontend con **Clean Architecture**: dominio, casos de uso, infraestructura y presentación separados por capas.

## Stack

- [Astro](https://astro.build) `^7`
- React `19` (islas)
- [Nanostores](https://github.com/nanostores/nanostores) + `@nanostores/query`
- pnpm
- Node `>= 22.23.4`

## Estructura

```text
src/
├── features/
│   └── posts/
│       ├── domain/           # modelos y contratos
│       ├── application/      # casos de uso
│       ├── infrastructure/   # API / adaptadores
│       ├── presentation/     # componentes, islas y store
│       ├── container.client.ts
│       └── index.ts
├── pages/                    # rutas Astro
└── shared/
    ├── infrastructure/       # cliente HTTP compartido
    └── presentation/         # layouts
```

Cada feature vive en `src/features/<nombre>/` y no debe depender de detalles de UI ni de HTTP desde el dominio.

## Comandos

Desde la raíz del proyecto:

| Comando              | Acción                                      |
| :------------------- | :------------------------------------------ |
| `pnpm install`       | Instala dependencias                        |
| `pnpm dev`           | Servidor de desarrollo en `localhost:4321`  |
| `pnpm build`         | Build de producción en `./dist/`            |
| `pnpm preview`       | Previsualiza el build localmente            |
| `pnpm astro ...`     | CLI de Astro (`add`, `check`, etc.)         |

## Documentación

- [Astro docs](https://docs.astro.build)
- [Clean Architecture (Uncle Bob)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
