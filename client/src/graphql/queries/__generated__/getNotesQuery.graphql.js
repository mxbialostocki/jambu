/**
 * @flow
 * @relayHash b0ea7ffaf1f2da610ada36e178e299d3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getNotesQueryVariables = {||};
export type getNotesQueryResponse = {|
  +notes: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +content: ?string,
  |}>
|};
export type getNotesQuery = {|
  variables: getNotesQueryVariables,
  response: getNotesQueryResponse,
|};
*/


/*
query getNotesQuery {
  notes {
    _id
    content
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "notes",
    "storageKey": null,
    "args": null,
    "concreteType": "Note",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "getNotesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "getNotesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "getNotesQuery",
    "id": null,
    "text": "query getNotesQuery {\n  notes {\n    _id\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '21d06b6e5d13af0cf325f99d81ecb838';

module.exports = node;
