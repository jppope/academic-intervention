

## Data Model

### Group name
People (foreign)
papers
citations
Street
City
State/ province
country
zip
Description/ mission
founded
url
Git org
email
phone
SPOC (single point of contact)

### User
name
email
show_email (bool)
phone
show_phone (book)
desc
site
github repo
favorite_papers

### Papers
Title
Owner
Citations
Reviews
Links
comments?/ info 
    Popularity Metric? 

Relationships

Paper has one User   <=> User has many Paper

User has many Organizations  <=> Organizations have many Users