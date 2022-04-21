# API ROUTES
Base URL: https://team-alpha-webform-131.herokuapp.com/

## User

#### **GET** /api/user/:id

Gets user information.


#### **POST** /api/user/addform/


Adds webform to user's profile. 

Data: 
authorid: MongoDB ObjectID
webformid: MongoDB ObjectID
formtype: String

Sample request: 

```javascript
{
    authorid: 6258a527c211aa41e7f14a72,
    webformid:6258abacf5968ca1e447badd,
    formtype:"drafts"
}

```
#### **POST** /api/user/moveform/
Changes webform status. 

Data: 
userid: MongoDB ObjectID,
newstatus: String,
oldstatus: String

Sample request: 

```javascript
{
    userid: 6258a527c211aa41e7f14a72,
    newstatus:"active",
    oldstatus:"drafts"
}

```


**GET** /api/user/:id/activeforms/

**GET** /api/user/:id/inactiveforms/

**GET** /api/user/:id/draftforms/

**POST** /api/user/create/

**PUT** /api/user/update/:id

**DELETE** /api/user/delete/:id

---
## Webform

**GET** /api/webform/:id

**POST** /api/webform/create/

**PUT** /api/webform/update/:id

**DELETE** /api/webform/delete/:id

