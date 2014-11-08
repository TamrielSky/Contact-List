Contact-List
============

Contact-List is a cross platform mobile app which is developed using PhoneGap( HTML5, CSS3, JavaScript & JQuery Mobile)  

1. In case of large contact lists, I store all contacts in app local storage when the app starts up the first time. 
   Hence loading time is more for a large list of contacts when the app first starts up since it retrieves contacts from the phone database. 
   All subsequent runs will have reduced loading time due to local storage use.
2. I thought it would be nice to view those people who we contact more often and most recently in the contact list. Hence I first show the most recent contacts on top of my list( recent contacts section with a one touch call icon) and then all contacts alphabetically sorted below them. 
3. I dynamically update the page when contacts are added or deleted
