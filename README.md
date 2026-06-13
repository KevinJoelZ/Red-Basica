# Página: Red Básica (Cisco Packet Tracer)

Repositorio con una página estática que explica y muestra una topología básica creada en Cisco Packet Tracer. Incluye las páginas HTML, estilos CSS, capturas de pantalla y un video final.

## Estructura del proyecto

- `index.html` — Página principal
- `styles.css` — Estilos globales
- `scripts.js` — Comportamientos compartidos (scroll, lightbox, etc.)
- `packet-tracer.html`, `red-basica.html`, `router-2911.html`, `switch-2960.html`, `pc-laptop.html`, `crear-red.html` — Subpáginas
- `Video/` — Carpeta para el video final (agregar tu archivo de video aquí)
- `Capturas/` — Carpeta para capturas de pantalla
- `push_repo.bat`, `push_repo.sh` — Scripts para inicializar y subir/sincronizar con GitHub
- `sync_repo.bat`, `sync_repo.sh` — Scripts para sincronizar con el remoto
- `.gitattributes` — Configura Git LFS para archivos multimedia

## Cómo ver el sitio localmente

La forma más simple es abrir `index.html` en tu navegador. Para servirlo mediante un servidor local (recomendado si usas rutas relativas):

Python 3 (desde la raíz del proyecto):

```bash
python -m http.server 8000
# Abrir http://localhost:8000
```

## Subir el proyecto a GitHub (recomendado en tu máquina)

He incluido scripts que automatizan los pasos comunes. No compartas tokens en chats públicos; usa `gh auth login` o `gh` para autenticar de forma segura.

Windows (PowerShell):

```powershell
gh auth login
git lfs install
.\sync_repo.bat   # o .\push_repo.bat para inicializar y subir
```

Linux/macOS:

```bash
gh auth login
git lfs install
./sync_repo.sh    # o ./push_repo.sh
```

Si tu video supera 100 MB usa Git LFS (los archivos `Video/*` y `Capturas/*` están listados en `.gitattributes`). Comandos útiles:

```bash
git lfs install
git lfs track "Video/*"
git lfs track "Capturas/*"
git add .gitattributes
git add Video/* Capturas/*
git commit -m "Agregar medios con LFS"
git push origin main
```

### Si usas token en local (menos recomendable)

```bash
git remote add origin https://<TOKEN>@github.com/KevinJoelZ/Pagina-Red-Basica.git
git push -u origin main
```

Reemplaza `<TOKEN>` por tu token en tu equipo local únicamente; si el token llegó a compartirse públicamente, revócalo inmediatamente en https://github.com/settings/tokens.

## Contribuciones

Si deseas mejorar la página:

- Abre un issue o un pull request en el repositorio.
- Mantén los cambios pequeños y explícales en el mensaje de commit.

## Licencia y créditos

Proyecto educativo. Atribuye el contenido a Tecnólogo Kevin Zapata si lo reutilizas.

---

Si quieres que adapte el README (más detallado, con capturas embebidas o un índice), dime qué sección quieres ampliar y lo actualizo.
