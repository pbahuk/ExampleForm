###Getting Started###

####Familiar with Git?#####
Checkout this repo, install dependencies, then start the express router to serve the bundled file:

```
	> git clone repo_path_
	> cd FromExample
	> npm install
	> npm start
	> Go to localhost:3000
```

####Perfect Forms#####
Though this repo contains a full-fleged React project with all the essential components
	1. An express server
	2. webpack (Faster web develpoment)
	3. React router
	4. CSS-Modules
	5. and many more things.

But the main objective of this project is to make the life of a developer simple. How many of you have written the same 
TextInput again and again to make a form and get the user-data for it. 

How about a module that does that for you simply by giving a JSON schema? 
Introducing PerfectForms.

It provides a schema language to define form structure and validation and a set of form components to render schemas into UI.
Data flow between Perfect Forms components provides strong immutability guarantees. Almost every aspect of Perfect Forms is designed to be extendable. It is easy to customize the behaviour of the existing components or create completely new ones.

The schema of a particular form can be defined as:
```
	var mySchema = {
    title: 'Add Address',
    type: 'object',
    fields: [
	        [
	            {   fieldName: 'name', type: 'string', label: 'Name *', maxLength: 30, editable: true},
	            ...
	            ...
	            ...
	        ],
	        [
	            {   fieldName: 'pincode', type: 'string', label: 'Pincode *', maxLength: 6, editable: true, action: (action which you want to perform) },
	            ...
	            ...
	            ...
	        ],
    	],
	};
```

fields: Array, which holds how many card elements in the form are required. Their can be a single card element.
fieldName: Any input field you want user to fill.
			Currently PerfectForms support TextInput, TextArea, CheckBox, Buttons
			The fields which you can set via schema are fieldName, defaultValue, , label, maxLength, Validation(which we will have to define it seperately), editable (true/false), action (associated action if any)

For Perfect Form validation, you can write a validator object that contains the pattern to be matched before proceeding to do any action. The validation will be done as soon as the input field is blurred.

```
	var validator= {
	    name: '^[A-Za-z0-9 ]{1,30}$',
	    mobile: '[1-9][0-9]{9}',
	    ...
	    ...
	    ...
	}
```

Finally you can include the PerfectForm into your working repo using
```
	<PerfectForm schema ={mySchema}
                formData= {formData}
                validator={ validator }
                onSubmit= (Submit action)
                onCancel= (cancel action) />
```




