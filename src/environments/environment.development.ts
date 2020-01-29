// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=development` then `environment.development.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: true,
  lbBaseURL: "https://doi2.psi.ch:3001",
  facility: "psi",
  oaiProviderRoute: "https://doi2.psi.ch/oaipmh/Publication",
  doiBaseUrl: "https://doi.org/"
};
