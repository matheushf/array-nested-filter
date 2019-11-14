# ArrayNestedFilter

Ever got into the point where you need to filter a nested array, so you gotta implement that whole recurrence function again?

Yeah, I got tired of that, so I created this small module to do it when I need it.

## Usage and params

```javascript
import { filterNested } from 'array-nested-filter';

const listArray = [{
  name: 'First parent',
  children: [{
    name: 'First children',
  }, {
    name: 'Second children',
  }]
}];

const filtered = filterNested({
  array: listArray,
  search: 'Second',
  searchAttribute: 'name',
  childrenPath: 'children',
})

/* filtered will be
[{
  name: 'First parent',
  children: [{
    name: 'Second children',
  }]
}];
*/
```

Thats pretty much it. If you have any doubt or request, open an issue on this repo please, cheers.
