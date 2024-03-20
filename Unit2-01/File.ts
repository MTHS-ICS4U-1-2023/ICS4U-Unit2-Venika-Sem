/*This program stacks strings
 * By Venika Sem
 * @version 1.0
 * @since Feb-2024
*/

export class File {
          // Array that contains all of the string
          private array: string[]

          // Creates the array
          public constructor() {
             this.array = []
          }

          // Pushes the strings to the array
          public push(string: string) {
             this.array.push(string)
          }

          // Prints the array to the console
          public showStack() {
             let stackValues = this.array[0]

          for (let counter = 1; counter < this.array.length; counter++) {
             stackValues = stackValues + ", " + this.array[counter]
          }

          return stackValues
          }
}
