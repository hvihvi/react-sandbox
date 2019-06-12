# Flexbox & Layouts

Wrap with a Container, containing Items.



## FlexContainer

`display: flex`: Le keyword pour faire profiter de flex et des propriétés flex. S'applique uniquement aux childrens directs.
`flex-direction` : row (->), reverse-row (<-), column (v), reverse-column (Î)
`justify-content`: s'applique sur l'axe principal (row par défaut). `center` en général. `space-around` permet de distribuer les éléments avec un espace entre chaque, `space-between` fait pareil sans les marges sur les extremités.
`align-items`: pareil que justify-content mais verticalement. `center` en général.
`flex-wrap`: `wrap` permet de mettre les éléments à la ligne automatiquement quand on dépace la taille max d'une ligne (à préciser, en `no-wrap` par défaut).


## Item

`order`: change l'ordre des items. Eviter si possible, plus facile à manipuler/tester en JS/React plutôt qu'en CSS.
`align-self`: permet de changer le positionnement d'un item en particulier.
`flex-grow`: 0 par défaut. Distribue l'espace restant proportionnellement aux flex-grow assignés.

## Layouts

Un composant qui vient accueillir d'autres composants et a pour unique responsabilité de les disposer, sans se soucier des composant qu'on lui passe.
C'est ici qu'on utilisera principalement les CSS flex.

### Pattern avec injection

Pour les cas complexes, on peut injecter les composants en props

exemple:

usage:
```jsx
<Layout
       header={<Header/>}
       body={<Body/>}
/>
```

implem:
```jsx
const Layout = ({header, body}) =>
<div>
  <div>
    {header}
  </div>
  <Separator/>
  <div>
    {body}
  </div>
</div>
```

### Pattern avec Children

Pour des cas simples ce pattern est plus lisible et intuitif.

`props.children` est passé à tous les composants React, constitue l'élément enfant du composant.

usage:
```jsx
<Layout>
  <Item1/>
  <Item2/>
</Layout>
```

implem:
```jsx
const Layout = ({children}) => <div>
        {React.Children.map(children, (child, i) => {
          // Example logic here... ignores first child
          if (i < 1) return
          return child
        })}
</div>
```
single children:
```jsx
const Layout = ({children}) => <div>{children}</div>
```

`React.Children.toArray(children)` permet de les convertir en array et donc de les manipuler.

## Note on CSS in React

React recommande de ne pas utiliser les propriétés d'héritage/cascade de CSS (sass/less), et de privilégier la composition de composants React.

Par exemple, si on a une classe CSS qui correspond à un conteneur flex, plutôt que de réutiliser et étendre la classe, là wrapper dans un composant et n'exposer ce style qu'à ce composant. Et utiliser ce composant par composition pour réutiliser ce style.