/*This program stacks strings
 * By Venika Sem
 * @version 1.0
 * @since Feb-2024
*/

import { File } from './File'
import { createPrompt } from 'bun-promptx'

const basicStack = new File()

for (let counter = 0; counter < 3; counter++) {
        // String value
        const string = createPrompt('Enter a string: ')

        const stringValue = string.value
        basicStack.push(stringValue)
}

// Show the stack's value
const stackValues = basicStack.showStack()
console.log(stackValues)

// Show the program as done
console.log('\nDone.')
