# SFDX Simple App

> **Important:** Salesforce DX is available as a developer preview. Salesforce DX isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools.

The Salesforce Developer Experience (SFDX) starts with source code living in your version control system.

## Set Up the Developer Workspace

Our first goal is to set up a developer workspace for us to use to modify our application. It starts by cloning the repository. Use the command ...

    git clone https://github.com/pchittum/sfdx-greenfield-template.git

… or ...

    git clone git@github.com:pchittum/sfdx-greenfield-template.git

… to clone the repository. Then, open the directory.

    cd sfdx-simple

- Authorize environment hub

    heroku force:org:authorize

- create a scratch org and open it

    heroku force:org:create -f config/workspace-scratch-def.json
    heroku force:org:open

- create something in metadata then pull it to the local repo

    heroku force:src:pull


    
## Resources

For details on using sfdx-simple, please review the [Salesforce DX Developer Guide](https://goo.gl/rG43Cz).

## Issues

Please log issues related to this repository [here](https://github.com/forcedotcom/sfdx-simple/issues).
