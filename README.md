# Angular-WorkShop-Basics-BestPractices
Angular WorkShop - Basics and Best Practices


- Step-1

*Project Structure
*Index Serve by Backend.
*Single Responsability Principle
    + one component per file. (400 code lines)
    + easier unit testing and mocking.
    + easier to read a file, maintain and avoid collisions in source controls.
    = divide the js file in different files.
*Small functions
    +75 LOC less is better
    +easier to read, maintain, test, reuse, avoid bugs, avoid unwanted coupling.
*IIFE
*app Module - submodules naming
*named functions
*ControllerAs (use this)
    +view (dotted object)
    +controller (vm = this)
    +route
*Members up to top


-Step-2
* keep controllers light
* move logic to services
* validations


-Step-3
* landview
* table with edit (ng-repeat)
	+directives
*$http


-Step-4
	+ digest cycle
	+ two way data binding
	+ one way data binding
	+ "if" fix - to html




--------------------------------------------------------------------------
# IMPORTANT
- $on, $emit, $broadcast
- directives
- angular copy
- services logic