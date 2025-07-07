// import { Search, SearchSpec, ALL_APPLICABLE_OPERATORS } from '@wix/sdk-types';

// export enum IdentityType {
//   /** Unknown type. This value is not used. */
//   UNKNOWN = 'UNKNOWN',
//   /** A site visitor who has not logged in. */
//   ANONYMOUS_VISITOR = 'ANONYMOUS_VISITOR',
//   /** A logged-in site member. */
//   MEMBER = 'MEMBER',
//   /** A Wix account holder, such as a site owner or contributor. */
//   WIX_USER = 'WIX_USER',
// }

// /** @enumType */
// export type IdentityTypeWithLiterals =
//   | IdentityType
//   | 'UNKNOWN'
//   | 'ANONYMOUS_VISITOR'
//   | 'MEMBER'
//   | 'WIX_USER';

// // Define your Poem entity type
// interface Poem {
//   title: string;
//   text: string;
//   createdDate: number;
//   identityType: IdentityType;
// }


// // Define the search capabilities for Poem
// interface PoemSearchSpec extends SearchSpec {
//   wql: [
//     {
//       operators: typeof ALL_APPLICABLE_OPERATORS,
//       fields: ['title', 'identityType'],
//       sort: 'BOTH'
//     },
//     {
//       operators: ['$eq'],
//       fields: ['createdDate'],
//       sort: 'ASC'
//     },
//       {
//       operators: ['$gt'],
//       fields: ['createdDate'],
//       sort: 'DESC'
//     }
//   ],
//   searchable: ['text'],
//   aggregatable: ['text', 'title'],
//   paging: 'cursor'
// }

// // Create the re-usable SearchPoem type
// type SearchPoem = Search<Poem, PoemSearchSpec>;


// const poemSearchRequest: SearchPoem = {
//   filter: {
//     'identityType' : {
      
//     }
//   },
//   sort: [
//     {
//       fieldName: 'title',
//       order: 'ASC'
//     },
//      {
//        fieldName: 'createdDate',
//        order: 'DESC' // THROWS ERROR -
//      }
//   ],
//   search: {
//     fields: ['text'],
//     expression: '12312321',
//     mode: 'AND',
//     fuzzy: true
//   },
//   cursorPaging: {

//   },
//   aggregations: [
//     {
//       name: 'title',
//       type: 'VALUE',
//       fieldPath: 'title',
//       value: {
//         sortType: 'COUNT',
//         sortDirection: 'ASC'
//       }
//     }
//   ]

// }