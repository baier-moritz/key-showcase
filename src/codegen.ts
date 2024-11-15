import { CodegenConfig } from "@graphql-codegen/cli"
import { apolloUrl } from "./utils/apolloClient"

const config: CodegenConfig = {
  schema: apolloUrl,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql"
      },
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
