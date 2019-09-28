#!/usr/bin/env node
const fs = require('fs')

const { argv } = require('yargs')

const DEFAULT_COMPONENT_DESTINATION = `${__dirname}/../src/components`
const COMPONENT_PLACEHOLDER = 'COMPONENT_NAME'

function getDestinationDir(args) {
  if (args.destination && args.destination.length) {
    return argv.destination
  }
  return DEFAULT_COMPONENT_DESTINATION
}

function makeDestinationDir(args, componentName) {
  const destination = `${getDestinationDir(args)}/${componentName}`
  fs.mkdirSync(destination)
  return destination
}

function interpolateTemplate(template, placeholder, replaceValue) {
  return template.split(placeholder).join(replaceValue)
}

function loadTemplateFiles(templateName) {
  const templateDir = `${__dirname}/templates/${templateName}`
  const filenames = fs.readdirSync(templateDir)
  return filenames.map(filename => ({
    filename,
    fileContents: fs.readFileSync(`${templateDir}/${filename}`, 'utf8'),
  }))
}

const componentName = argv.component
if (componentName && componentName.length) {
  const destination = makeDestinationDir(argv, componentName)
  loadTemplateFiles('component').forEach(({ filename, fileContents }) => {
    const interpolatedTemplate = interpolateTemplate(
      fileContents,
      COMPONENT_PLACEHOLDER,
      componentName
    )
    const destinationFileName = interpolateTemplate(
      filename,
      COMPONENT_PLACEHOLDER,
      componentName
    ).replace('.txt', '')
    fs.writeFileSync(
      `${destination}/${destinationFileName}`,
      interpolatedTemplate
    )
  })
}
