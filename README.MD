# BookStore #
## To Run in your Local Machine ##
**Clone the repository**
```
git clone https://github.com/NirajanBekoju/Book-Store
```

**Create a virtual environment and activate it**
```
virtualenv venv
source ./venv/bin/activate
```

**Install all requirements from requirements.txt**
```
pip install -r requirements.txt
```

**Create a superuser**
```
python3 manage.py createsuperuser
```

**Build the React App**
```
npm run build
```

**Run Server**
```
python3 manage.py runserver
```

## Models ##
1. Book
	- Book Title
	- Author
	- Category
	- Image
	- Description
	- Price
	- Is_published
	- Is_featured ======> (Modified)
	- Created Date
	- Updated Date
	

2. Inquiry(Buy Now)
	- Name
	- Email Address
	- Book(ID)
	- Short Message
	- Payment Method(Modified)
		- Cash
		- ESewa
		- ConnectIPS
		- Khalti
	
3. Contact(Form)
	- Name
	- Email Address
	- Message
	- Captcha(Modified)
	
## Views ##
1. Book
	- Listing of all books(Book)
	- Listing of single book(Book Detail)
	- Listing By Choice(Modified) ====> Search View(Filter View)
	
	Search By:
		- Title (Keyword)
		- Author (Keyword)
		- Category (Choices)
		- Price Range(Choices) in the range of 1000
		- Keywords (Description)

2. Inquiry(Buy Now)
	- Inquiry Form

3. Contact
	- Contact Form



