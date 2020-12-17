# pcf-react-typescript

A PowerApps Component Framework React Typescript starter kit

**PCF Installation**

[Get tooling for Power Apps component framework](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/get-powerapps-cli)

**Project creation steps**

\*run "pac install latest" first

1. md ProjectName & cd ProjectName
2. pac pcf init --namespace <> --name <> --template <field or dataset>
3. npm i & npm run build
4. install npms
   - npm i -D eslint prettier typescript eslint-config-airbnb-typescript-prettier @types/jest jest ts-jest
   - npm i react react-dom @fluentui/react
5. copy .eslintrc.js and .prettierrc.js, jest.config.js and tsconfig.json
6. npx sb init
7. copy .storybook\main.js
8. copy the scripts section in package.json

**Project deploy file creation steps**

1. md deploy & cd deploy (in ProjectName folder)
2. pac solution init --publisher-name <> --publisher-prefix <>
3. pac solution add-reference --path ..\
4. edit deploy\Other\Solution.xml and replace "deploy"
   - UniqueName
   - LocalizedName description="" languagecode="1033"
5. msbuild /t:build /restore /p:configuration=Release
