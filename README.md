<p align="center">
  <img style="text-align: center" src="https://angular-shortcode.web.app/assets/icons/logo-128.png"/>
  <h1 align="center">Angular Shortcode</h1>
</p>

![](https://img.shields.io/github/stars/pandao/editor.md.svg)


# SvSearchHighlight

## Table of Contents

- [Live Demo](#demo)
- [Installation](#installation)
- [Options](#options)
- [Usage](#usage)
- [Example](#example)
- [Author](#author)
- [Contact](#conatact)


<a name="demo"/>

## Demo
***

✨ [Angular Shortcode](https://angular-shortcode.web.app/home/highlight) ✨

[comment]: <> (✨ [Stackblitz]&#40;https://stackblitz.com/edit/svstarrating?file=src/app/app.component.ts&#41; ✨)

[comment]: <> (| [Stackblitz]&#40;#demo&#41;)

<a name="installation"/>

## Installation
***
Install with NPM

```bash
npm i sv-search-highlight
```


<a name="options"/>

## Options
***

| Name                  | Type            | Default Value  |Description     |
| --------------------- |:---------------:|:--------------:|----------------|
| value                 | any             |                | The main text  |
| search                | string          |                | The search text|


<a name="usage"/>

## Usage
***

Import SvSearchHighlightModule in your app

```typescript
import { SvSearchHighlightModule } from 'sv-search-highlight';

@NgModule({
  imports: [
    ...
      SvSearchHighlightModule
  ],
  ...
})
export class AppModule { }
```

<a name="example"/>

## Example
***
```html
<input [(ngModel)]="search">
<div [innerHTML]="value | svSearchHighlight : search"></div>
```

<a name="auther"/>

## Author
***
`Mehdi Sadeghian` `Samira Vahidi`


<a name="conatact"/>

## Contact
***
`github`
- [Angular Shortcode](https://github.com/angular-shorcode/)
- [Mehdi Sadeghian](https://github.com/sadeghianme)
- [Samira Vahidi](https://github.com/svahidi)

`linedIn`
- [Mehdi Sadeghian](https://linkedin.com/in/mehdi-sadeghian626127)
- [Samira Vahidi](https://www.linkedin.com/in/samira-vahidi626127)

`twitter`
