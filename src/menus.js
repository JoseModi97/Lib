
export const AppMenus = {
    
	navbarTopRight: [],
	navbarTopLeft: [],
	navbarSideLeft: [
  {
    "path": "/home",
    "label": "Home",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/admins",
    "label": "Admins",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/authors",
    "label": "Authors",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/books",
    "label": "Books",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/category",
    "label": "Category",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/issuedbooks",
    "label": "Issued Books",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/users",
    "label": "Users",
    "icon": "extension",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	adminslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": "Mobile",
    "align": "left",
    "sortable": false,
    "name": "mobile",
    "field": "mobile"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	authorslistheader: [
  {
    "label": "Author Id",
    "align": "left",
    "sortable": false,
    "name": "author_id",
    "field": "author_id"
  },
  {
    "label": "Author Name",
    "align": "left",
    "sortable": false,
    "name": "author_name",
    "field": "author_name"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	bookslistheader: [
  {
    "label": "Book Id",
    "align": "left",
    "sortable": false,
    "name": "book_id",
    "field": "book_id"
  },
  {
    "label": "Book Name",
    "align": "left",
    "sortable": false,
    "name": "book_name",
    "field": "book_name"
  },
  {
    "label": "Author Id",
    "align": "left",
    "sortable": false,
    "name": "author_id",
    "field": "author_id"
  },
  {
    "label": "Cat Id",
    "align": "left",
    "sortable": false,
    "name": "cat_id",
    "field": "cat_id"
  },
  {
    "label": "Book No",
    "align": "left",
    "sortable": false,
    "name": "book_no",
    "field": "book_no"
  },
  {
    "label": "Book Price",
    "align": "left",
    "sortable": false,
    "name": "book_price",
    "field": "book_price"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	categorylistheader: [
  {
    "label": "Cat Id",
    "align": "left",
    "sortable": false,
    "name": "cat_id",
    "field": "cat_id"
  },
  {
    "label": "Cat Name",
    "align": "left",
    "sortable": false,
    "name": "cat_name",
    "field": "cat_name"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	issuedbookslistheader: [
  {
    "label": "S No",
    "align": "left",
    "sortable": false,
    "name": "s_no",
    "field": "s_no"
  },
  {
    "label": "Book No",
    "align": "left",
    "sortable": false,
    "name": "book_no",
    "field": "book_no"
  },
  {
    "label": "Book Name",
    "align": "left",
    "sortable": false,
    "name": "book_name",
    "field": "book_name"
  },
  {
    "label": "Book Author",
    "align": "left",
    "sortable": false,
    "name": "book_author",
    "field": "book_author"
  },
  {
    "label": "Student Id",
    "align": "left",
    "sortable": false,
    "name": "student_id",
    "field": "student_id"
  },
  {
    "label": "Status",
    "align": "left",
    "sortable": false,
    "name": "status",
    "field": "status"
  },
  {
    "label": "Issue Date",
    "align": "left",
    "sortable": false,
    "name": "issue_date",
    "field": "issue_date"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	userslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": "Mobile",
    "align": "left",
    "sortable": false,
    "name": "mobile",
    "field": "mobile"
  },
  {
    "label": "Address",
    "align": "left",
    "sortable": false,
    "name": "address",
    "field": "address"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],

    exportFormats: {
        print: {
			label: 'Print',
			color: 'blue',
            icon: 'print',
            id: 'print',
            ext: 'print',
        },
        pdf: {
			label: 'Pdf',
			color: 'red',
            icon: 'picture_as_pdf',
            id: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
			color: 'green',
            icon: 'grid_on',
            id: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
			color: 'teal',
            icon: 'grid_on',
            id: 'csv',
            ext: 'csv',
        },
    },
    
}