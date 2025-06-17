# Development Workflow

This project was generated using [RadSystems](https://radsystems.io) with the Quasar framework.

Follow these steps to replicate or continue its development:

1. **Install Node.js** (v14.19 or later) and npm.
2. **Install Quasar CLI** globally:

   ```bash
   npm install -g @quasar/cli
   ```

3. **Generate the project** using RadSystems:
   - Select **Quasar** for the front-end.
   - Provide the project name `Lib`.
   - RadSystems scaffolds the standard Quasar structure.

4. **Install dependencies** inside the generated folder:

   ```bash
   npm install
   ```

5. **Run the development server**:

   ```bash
   quasar dev
   ```

   The app will be available at `http://localhost:8050` by default.

6. **Build for production** when ready to deploy:

   ```bash
   quasar build
   ```

   Deploy the generated files from the `dist` or `build` directory to your web server.

7. **Customize further** by editing `quasar.conf.js` and the source files under `src/`.

This workflow outlines how the project was initially developed and how you can continue working on it.

## API Endpoints

All API calls share a common base path defined in `quasar.conf.js` as `API_PATH` (default `http://localhost:8060/api/`). Components build specific paths for each resource. Typical endpoints for a resource named `resource` are:

- `resource/index` — list records (`GET`)
- `resource/view/{id}` — retrieve a single record (`GET`)
- `resource/add` — create a new record (`POST`)
- `resource/edit/{id}` — update an existing record (`POST`)
- `resource/delete/{id}` — delete a record (`GET`)

The project includes the following resources and corresponding endpoints:

- `admins`
- `authors`
- `books`
- `category`
- `issuedbooks`
- `users`
- `account/change_password/` for password updates

Vue components call these endpoints through `ApiService`. List pages request data from `<resource>/index` while form pages send updates using `<resource>/add` or `<resource>/edit/{id}`. The `view` pages load single records with `<resource>/view/{id}` and also provide a delete option that calls `<resource>/delete/{id}`.

