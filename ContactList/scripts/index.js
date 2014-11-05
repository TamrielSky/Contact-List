// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

var recentContacts = [];
var neverContacts = [];

var pictureSource; 
var destinationType;

(function () {
    "use strict";



})();




function quickDisplay(recentContacts, neverContacts)
{
    var ulcreate = "";
    var length_recent = recentContacts.length;
    var length_never = neverContacts.length;
    var img = 'images/defaultimage.png';

    var d = new Date();
    var currentTime = d.getTime();

    

    var len = length_recent - 1;
    var loopArray = function (arr) {

        var contact = arr[len].contactInfo;
        var time = arr[len].timeinteracted;
        var displayName;
        if (contact.displayName) {
            displayName = contact.displayName
        }
        else if (contact.name) {
            if (contact.name.formatted) {
                displayName = contact.name.formatted;
            }
            else if (contact.name.givenName) {
                displayName = contact.name.givenName;
            }
        }
        else {
            displayName = "No Name";
        }

        var d = new Date();
        var timeInMs = d.getTime();

        var currentTime = timeInMs - time;
        var timepast;

        if (currentTime > 2592000000) {
            getMonths = Math.floor(currentTime / 2592000000);
            if (getMonths == 1) {
                timepast = getMonths + " month ago";

            }
            else
                timepast = getMonths + " months ago";

        }
        else {

            if (currentTime > 604800000) {
                var getWeeks = Math.floor(currentTime / 604800000);

                if (getWeeks == 1) {
                    timepast = getWeeks + " wk ago";
                }
                else {
                    timepast = getWeeks + " wks ago";

                }
            }
            else {
                if (currentTime > 86400000) {
                    var getDays = Math.floor(currentTime / 86400000);

                    if (getDays == 1) {
                        timepast = getDays + " day ago";

                    }
                    else {
                        timepast = getDays + " days ago";

                    }
                }
                else {

                    if (currentTime > 3600000) {

                        var getHrs = Math.floor(currentTime / 3600000);

                        if (getHrs == 1) {
                            timepast = getHrs + " hr ago";
                        }
                        else {
                            timepast = getHrs + " hrs ago";
                        }
                    }
                    else {
                        if (currentTime > 60000) {
                            getMins = Math.floor(currentTime / 60000);

                            if (getMins == 1) {
                                timepast = getMins + " min ago"

                            }
                            else {
                                timepast = getMins + " mins ago"

                            }
                        }
                        else {
                            getSecs = Math.floor(currentTime / 1000);
                            timepast = getSecs + " secs ago"
                        }
                    }
                }
            }


        }
        if (arr[len].photovalid == "yes")
        {
            img = contact.photos[0].value;
        }
        else
        {
            img = "images/defaultimage.png";
        }
        ulcreate += ' <ul data-role="listview" style = "border:none !important; -webkit-box-shadow: none; box-shadow: none;" data-inset="true" class="contactItem" value=' + len + ' name="recent">\
                               <li style = "border:none !important"><img class = "circularimage" src ="' + img + '" /><p class="ui-li-aside dialnow"><img class="dialnow" value="' + contact.phoneNumbers[0].value + '" height="40" width="40" src ="images/call.png" class="ui-li-icon-right" /></p>\
                                <h2><font style ="color:#00B2B2">' + displayName + '</font></h2>\
                                <p><div class="ui-grid-a" style="padding:0 !important;">\
                                <div class="ui-block-a" style="width:10%; padding:0 !important;"><img src ="images/interact.png" height="25" width="25"/></div>\
                                <div class="ui-block-b" style="width:90%; padding:0 !important;"><font style="white-space:normal; color: #A9A9A9; font-weight: bold; font-size:80%"><span style = "line-height: 5px;"> interacted ' + timepast + '</span></font></div>\
                                </div>\
                                </p>  \
                                </li></ul>';

        len = len - 1;
        if (len >= 0) {
            loopArray(arr);
        }
        else {

            $('#recentContacts').append(ulcreate).promise().done(function () {

                $("#recentContacts ul").listview().listview("refresh");


            });

        }
    }
    loopArray(recentContacts);

                len = length_never - 1;
                var ulcreate1 = "";
                var loopArrayAll = function (arr) {


                        var contact = arr[len].contactInfo;
                        var displayName;


                        if (contact.displayName) {
                            displayName = contact.displayName
                        }
                        else if (contact.name) {
                            if (contact.name.formatted) {
                                displayName = contact.name.formatted;
                            }
                            else if (contact.name.givenName) {
                                displayName = contact.name.givenName;
                            }
                        }
                        else {
                            displayName = "No Name";
                        }
                        if (arr[len].photovalid == "yes")
                        {
                            img = contact.photos[0].value;
                        }
                        else {
                            img = "images/defaultimage.png";
                        }

                        var ulphone = "";
                        if (contact.emails) {
                            var ulphone = '<div class="ui-grid-a" style="padding:0 !important;">\
                                <div class="ui-block-a" style="width:15%; padding:0 !important;"><img src ="images/email.png" height="30" width="30"/></div>\
                                <div class="ui-block-b" style="width:85%; padding:0 !important;"><font style="white-space:normal; color: #A9A9A9; font-weight: bold; font-size:90%"><span>   ' + contact.emails[0].value + '</span></font></div>\
                                </div>'
                        }
                        ulcreate1 += ' <ul style = "border:none !important; -webkit-box-shadow: none; box-shadow: none;" class = "never_traverse" data-role="listview" data-inset="true" class="contactItem" id="key'+contact.id+'"  name="never">\
                               <li style = "border:none !important"><img class = "circularimage" src ="' + img + '"/>\
                                <h2><font style ="color:#00B2B2">' + displayName + '</font></h2>\
                                <p><div class="ui-grid-a" style="padding:0 !important;">\
                                <div class="ui-block-a" style="width:15%; padding:0 !important;"><img src ="images/call-icon.png" height="30" width="30"/></div>\
                                <div class="ui-block-b" style="width:85%; padding:0 !important;"><font style="white-space:normal; color: #A9A9A9; font-weight: bold; font-size:90%"><span>   ' + contact.phoneNumbers[0].value + '</span></font></div>\
                                </div>' + ulphone + '</p> \
                                </li></ul>';

                        len = len - 1;
                        if (len >= 0) {
                            loopArrayAll(arr);
                        }
                        else {

                            $('#allContacts').append(ulcreate1).promise().done(function () {

                                $("#allContacts ul").listview().listview("refresh");

                                setTimeout(function () {
                                    $.mobile.loading('hide');
                                }, 2);

                                $("#dividerAll").show();
                                $("#dividerRecent").show();



                            });
                        }

                }

                loopArrayAll(neverContacts);





}


function displaysortedList(recentContacts, neverContacts) {
    var ulcreate = "";
    var length_recent = recentContacts.length;
    var length_never = neverContacts.length;
    var img='images/defaultimage.png';
    
    var d = new Date();
    var currentTime = d.getTime();

    var returnValidPhoto = function (url, callback) {
        var img = new Image();
        
        img.onload = function () {
            //Image is ok
            callback(url);
        };
        img.onerror = function (err) {
            //Returning a default image for users without photo 
            callback("images/defaultimage.png");
        }

        if (!url.photos) {
            url = "";
        }
        else {
            url = url.photos[0].value;
        }
            img.src = url;

        
    };

    var len = length_recent - 1;
    var loopArray = function(arr)  {

        
        returnValidPhoto(arr[len].contactInfo, function (answer) {
            img = answer;
            if ("images/defaultimage.png" != img) {
                arr[len].photovalid = "yes";
            }

        var contact = arr[len].contactInfo;
        var time = arr[len].timeinteracted;
        var displayName;
        if (contact.displayName)
        {
            displayName = contact.displayName
        }
        else if(contact.name)
        {
            if(contact.name.formatted)
            {
                displayName = contact.name.formatted;
            }
            else if (contact.name.givenName) {
                displayName = contact.name.givenName;
            }
        }
        else
        {
            displayName = "No Name";
        }
        
        var d = new Date();
        var timeInMs = d.getTime();

        var currentTime = timeInMs - time;
        var timepast;
        
        if (currentTime > 2592000000)
        {
            getMonths = Math.floor(currentTime / 2592000000);
            if (getMonths == 1)
            {
                timepast = getMonths + " month ago";

            }
            else
            timepast = getMonths + " months ago";
            
        }
        else {

            if (currentTime > 604800000)
            {
                var getWeeks = Math.floor(currentTime / 604800000);

                if (getWeeks == 1)
                {
                    timepast = getWeeks + " wk ago";
                }
                else
                {
                    timepast = getWeeks + " wks ago";

                }
            }
            else
            {
                if (currentTime > 86400000)
                {
                    var getDays = Math.floor(currentTime / 86400000);

                    if (getDays == 1)
                    {
                        timepast = getDays + " day ago";

                    }
                    else
                    {
                        timepast = getDays + " days ago";

                    }
                }
                else {

                    if (currentTime > 3600000)
                    {
                        
                        var getHrs = Math.floor(currentTime / 3600000);

                        if (getHrs == 1)
                        {
                            timepast = getHrs + " hr ago";
                        }
                        else
                        {
                            timepast = getHrs + " hrs ago";
                        }
                    }
                    else
                    {
                        if (currentTime > 60000)
                        {
                            getMins = Math.floor(currentTime / 60000);

                            if (getMins == 1)
                            {
                                timepast = getMins + " min ago"

                            }
                            else
                            {
                                timepast = getMins + " mins ago"

                            }
                        }
                        else {
                            getSecs = Math.floor(currentTime / 1000);
                            timepast = getSecs + " secs ago"
                        }
                    }
                }
            }


        }
        ulcreate += ' <ul data-role="listview" style = "border:none !important; -webkit-box-shadow: none; box-shadow: none;" data-inset="true" class="contactItem" value=' + len + ' name="recent">\
                               <li style = "border:none !important"><img class = "circularimage" src ="' + img + '" /><p class="ui-li-aside dialnow"><img value="' + contact.phoneNumbers[0].value + '" class="dialnow" height="40" width="40" src ="images/call.png" class="ui-li-icon-right" /></p>\
                                <h2><font style ="color:#00B2B2">' + displayName + '</font></h2>\
                                <p><div class="ui-grid-a" style="padding:0 !important;">\
                                <div class="ui-block-a" style="width:10%; padding:0 !important;"><img src ="images/interact.png" height="25" width="25"/></div>\
                                <div class="ui-block-b" style="width:90%; padding:0 !important;"><font style="white-space:normal; color: #A9A9A9; font-weight: bold; font-size:80%"><span style = "line-height: 5px;"> interacted ' + timepast + '</span></font></div>\
                                </div>\
                                </p>  \
                                </li></ul>';

            len = len - 1;
            if(len >= 0) {
                loopArray(arr);   
            }
            else {

                $('#recentContacts').append(ulcreate).promise().done(function () {

                    $("#recentContacts ul").listview().listview("refresh");


                });


                len = length_never - 1;
                var ulcreate1 = "";
                var loopArrayAll = function (arr) {


                    returnValidPhoto(arr[len].contactInfo, function (answer) {
                        img = answer;
                        if ("images/defaultimage.png" != img) {
                            arr[len].photovalid = "yes";
                        }
                        var contact = arr[len].contactInfo;
                        var displayName;
                        
                        
                        if (contact.displayName) {
                            displayName = contact.displayName
                        }
                        else if (contact.name) {
                            if (contact.name.formatted) {
                                displayName = contact.name.formatted;
                            }
                            else if (contact.name.givenName) {
                                displayName = contact.name.givenName;
                            }
                        }
                        else {
                            displayName = "No Name";
                        }

                        var ulphone= "";
                        if (contact.emails)
                        {
                            var ulphone = '<div class="ui-grid-a" style="padding:0 !important;">\
                                <div class="ui-block-a" style="width:15%; padding:0 !important;"><img src ="images/email.png" height="30" width="30"/></div>\
                                <div class="ui-block-b" style="width:85%; padding:0 !important;"><font style="white-space:normal; color: #A9A9A9; font-weight: bold; font-size:90%"><span>   ' + contact.emails[0].value+ '</span></font></div>\
                                </div>'
                        }
                        ulcreate1 += ' <ul style = "border:none !important; -webkit-box-shadow: none; box-shadow: none;" class = "never_traverse" data-role="listview" data-inset="true" class="contactItem" id="key'+contact.id+'"  name="never">\
                               <li style = "border:none !important"><img class = "circularimage" src ="' + img + '"/>\
                                <h2><font style ="color:#00B2B2">' + displayName + '</font></h2>\
                                <p><div class="ui-grid-a" style="padding:0 !important;">\
                                <div class="ui-block-a" style="width:15%; padding:0 !important;"><img src ="images/call-icon.png" height="30" width="30"/></div>\
                                <div class="ui-block-b" style="width:85%; padding:0 !important;"><font style="white-space:normal; color: #A9A9A9; font-weight: bold; font-size:90%"><span>   ' + contact.phoneNumbers[0].value+ '</span></font></div>\
                                </div>' + ulphone + '</p> \
                                </li></ul>';

                        len = len - 1;
                        if (len >= 0) {
                            loopArrayAll(arr);
                        }
                        else {

                            $('#allContacts').append(ulcreate1).promise().done(function () {

                                $("#allContacts ul").listview().listview("refresh");

                                localStorage.setItem("allcontacts", JSON.stringify(neverContacts));

                                localStorage.setItem("recentlogs", JSON.stringify(recentContacts));

                                setTimeout(function () {
                                    $.mobile.loading('hide');
                                }, 2);

                                $("#dividerAll").show();
                                $("#dividerRecent").show();



                            });
                        }

                    });


                }

                loopArrayAll(neverContacts);





               
            }

        });

       
        }
  
    loopArray(recentContacts);

}

$(document).on("vclick", "#user-image", function () {

    navigator.camera.getPicture(gotPic, failHandler,
            {
                quality: 50, destinationType: destinationType.FILE_URI,
                sourceType: pictureSource.PHOTOLIBRARY
            });

});

$(document).on("vclick", ".goBack", function () {

    $.mobile.navigate("#ContactListPage");


});




$(document).on("vclick", ".dialnow", function (event) {

    event.stopPropagation();
   
    phonedialer.dial(
  $(this).attr('value'),
  function (err) {
      if (err == "empty") alert("Unknown phone number");
      else alert("Dialer Error:" + err);
  },
  function (success) { }
 );

});

function gotPic(data) {

    $("#user-image").prop('src', data).trigger("refresh");

}

function failHandler(e) {
    console.log(e.toString());
}

function cleanUp() {
    imagedata = "";

}

$(document).on("vclick", "#deleteContact", function () {

    var contactIndex = parseInt(localStorage.getItem("clickedContact"));
    if(localStorage.getItem('contactType') == "recent")
    {

        var contact = recentContacts[contactIndex].contactInfo;

    }
    else
    {
        var contact = neverContacts[contactIndex].contactInfo;

    }
    var searchid = contact.id;
    var options = new ContactFindOptions();
    options.filter = contact.id;
    options.multiple = false;
    var fields = ["id"];
    navigator.contacts.find(fields, onSuccess, onError, options);

    function onSuccess(contactfound) {
        // not sure if contacts is an array or not, since we specified multiple = false. check this.
     

        var deletecontact;
        if (contactfound instanceof Array) {
            
                for(var i =0; i< contactfound.length; i++)
                {
                    if(contactfound[i].displayName = contact.displayName)
                    {
                        deletecontact = contactfound[i];
                        deletecontact.remove(onRemoveSuccess, onRemoveError);

                        break;
                    }
                }
                
            }
        else{
         
            localStorage.setItem("history", "yes");
            setTimeout(function () {
                $.mobile.loading('show', {
                    text: 'Deleting contact. Please wait..',
                    textVisible: true,
                    theme: 'e',
                    html: ""
                });
            }, 2);
        contactfound.remove(onRemoveSuccess, onRemoveError);
        }

        function onRemoveSuccess() {

            alert("Contact Removed");
            $.mobile.navigate("#ContactListPage");

             
            $('#key'+searchid).remove();

            neverContacts.splice(location, 1);

            localStorage.removeItem("allcontacts");
            localStorage.setItem("allcontacts", JSON.stringify(neverContacts));

            


        };

        function onRemoveError(contactError) {

            setTimeout(function () {
                $.mobile.loading('hide');
            }, 1);

            alert("removal Error = " + contactError.code);
        };
        

       

    };

    function onError(contactError) {
        alert('Error!');
    };

   

});





$(document).on("vclick", "#save", function () {

    if (!$("#username").val())
    {
        alert("You must enter name");
        return;
    }
    var contact = navigator.contacts.create();
    contact.displayName = $("#username").val();
    contact.displayName = capitaliseFirstLetter(contact.displayName);

    if ($("#mobile").val()) {
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('mobile', $("#mobile").val(), true);
        contact.phoneNumbers = phoneNumbers;
    }
    else {
        alert("You must enter number");
        return;
    }

    if ($("#email").val()) {
        var emails = [];
        emails[0] = new ContactField('work', $("#email").val(), true);
        contact.emails = emails;
    }
     
    var photourl;
    if ($("#user-image").attr('src')) {
        photourl = $("#user-image").attr('src');
        if (photourl == "images/addcontacticon.png")
        {
            photourl = "images/defaultimage.png"
        }

    }
    else
    {
        photourl = "images/defaultimage.png";
    }
    if (!(photourl == "images/defaultimage.png")) {
        var photos = [];

        photos[0] = new ContactField('url', photourl, true);
        contact.photos = photos;
    }
    var name = new ContactName();
    var splitter = $("#username").val().split(" ");
    name.givenName = splitter[0];
    if (splitter[1])
    {
        name.familyName = splitter[1];
    }
     
    contact.name = name;

    localStorage.setItem("history", "yes");
    setTimeout(function () {
        $.mobile.loading('show', {
            text: 'Creating contact. Please wait..',
            textVisible: true,
            theme: 'e',
            html: ""
        });
    }, 1);
    contact.save(contactSuccess, contactError);

    function contactSuccess(contactsave) {

        var location = sortedIndex(neverContacts, contactsave.displayName);

        if (contact.photos) {
            var nevercontact = { contactInfo: contactsave, timeinteracted: "never interacted", photovalid: "yes" };
        }
        else {
            var nevercontact = { contactInfo: contactsave, timeinteracted: "never interacted", photovalid: "notknown" };

        }
        if (location == neverContacts.length) {
            neverContacts.push(nevercontact);
        }
        else if (location == 0)
        {
            neverContacts.unshift(nevercontact);

        }
        else {
            neverContacts.splice(location + 1, 0, nevercontact);
        }

        localStorage.removeItem("allcontacts");
        localStorage.setItem("allcontacts", JSON.stringify(neverContacts));


        localStorage.setItem('indexInsert', location);

        

        $.mobile.navigate("#ContactListPage");
        
    };


    


    function contactError(contactError) {
        alert("Please choose another image to save. Default photo is now being inserted.");

        setTimeout(function () {
            $.mobile.loading('hide');
        }, 1);

        $("#user-image").prop('src', "images/defaultimage.png").trigger("refresh");


      


    };
    
    function sortedIndex(array, value) {
        var low = 0,
            high = array.length;

        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            var compare = array[mid].contactInfo.displayName.localeCompare(value)
            if (compare == 1)
                low = mid + 1;
            else
                high = mid;
        }
        return low;
    };

});




$(document).on("pageshow", "#ContactListPage", function () {

    

    if (localStorage.getItem("indexInsert")) {
        var location = parseInt(localStorage.getItem("indexInsert"));
        localStorage.removeItem("indexInsert");
        var photo;
        if (location>=0) {
            var calc = neverContacts.length - location;
            if(!(location == (neverContacts.length - 1)) && (location != 0))
            location = location + 1;
            if (neverContacts[location].contactInfo.photos) {
                photo = neverContacts[location].contactInfo.photos[0].value;
            }
            else {
                photo = "images/defaultimage.png";
            }

            var contactcreate = neverContacts[location].contactInfo;
            var ulphone = "";
            var ulcreate = "";
            if (contactcreate.emails) {
                var ulphone = '<div class="ui-grid-a" style="padding:0 !important;">\
                                <div class="ui-block-a" style="width:15%; padding:0 !important;"><img src ="images/email.png" height="30" width="30"/></div>\
                                <div class="ui-block-b" style="width:85%; padding:0 !important;"><font style="white-space:normal; color: #A9A9A9; font-weight: bold; font-size:90%"><span>   ' + contactcreate.emails[0].value + '</span></font></div>\
                                </div>'
            }
            ulcreate += ' <ul style = "border:none !important; -webkit-box-shadow: none; box-shadow: none;" class = "never_traverse" data-role="listview" data-inset="true" class="contactItem" id="key'+contactcreate.id+'" name="never">\
                               <li style = "border:none !important"><img class = "circularimage" src ="' + photo + '"/>\
                                <h2><font style ="color:#00B2B2">' + contactcreate.displayName + '</font></h2>\
                                <p><div class="ui-grid-a" style="padding:0 !important;">\
                                <div class="ui-block-a" style="width:15%; padding:0 !important;"><img src ="images/call-icon.png" height="30" width="30"/></div>\
                                <div class="ui-block-b" style="width:85%; padding:0 !important;"><font style="white-space:normal; color: #A9A9A9; font-weight: bold; font-size:90%"><span>   ' + contactcreate.phoneNumbers[0].value + '</span></font></div>\
                                </div>' + ulphone + '</p> \
                                </li></ul>';

            if ((calc - 2) < 0) {
                $(".never_traverse").eq(0).before(ulcreate);
                $(".never_traverse").eq(0).listview().listview("refresh");

            }
            else {
                $(".never_traverse").eq(calc - 2).after(ulcreate);
                $(".never_traverse").eq(calc - 1).listview().listview("refresh");
            }

        }
    }

    if (localStorage.getItem("history") == "yes") {

        localStorage.removeItem("history");

        setTimeout(function () {
            $.mobile.loading('hide');
        }, 1);
    }

});


$(document).on("pageinit", "#ContactListPage", function () {

    $("#dividerAll").hide();
    $("#dividerRecent").hide();


    $.mobile.pushStateEnabled = false;

    setTimeout(function () {
        $.mobile.loading('show', {
            text: 'Loading Contacts. Please wait..',
            textVisible: true,
            theme: 'e',
            html: ""
        });
    }, 1);


    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.addEventListener("backbutton", onBackKeyDown, false);

    

});

function onBackKeyDown() {

    $.mobile.navigate("#ContactListPage");
}


$(document).on("vclick", ".createContact", function () {

    setTimeout(function () {
        $.mobile.loading('show', {
            text: 'Loading...',
            textVisible: true,
            theme: 'e',
            html: ""
        });
    }, 3);

    $.mobile.navigate("#createContactPage");
});

$(document).on("vclick", ".contactItem", function () {

    setTimeout(function () {
        $.mobile.loading('show', {
            text: 'Loading Contact...',
            textVisible: true,
            theme: 'e',
            html: ""
        });
    }, 1);

    localStorage.setItem('clickedContact', $(this).attr('value'));

    localStorage.setItem('contactType', $(this).attr('name'));

    localStorage.setItem('clickedImage', $(this).children("li").children("img").attr('src'));

    $.mobile.navigate("#showContactPage");
});

$(document).on("vclick", ".never_traverse", function () {

    setTimeout(function () {
        $.mobile.loading('show', {
            text: 'Loading Contact...',
            textVisible: true,
            theme: 'e',
            html: ""
        });
    }, 1);

    var id = $(this).attr('id').split("key")[1];
        var index = binaryIndexOf(id);

        localStorage.setItem('clickedContact', index);

        localStorage.setItem('contactType', $(this).attr('name'));

        localStorage.setItem('clickedImage', $(this).children("li").children("img").attr('src'));

        $.mobile.navigate("#showContactPage");
});


$(document).on("pagebeforeshow", "#createContactPage", function () {


    $("#user-image").prop('src', "images/addcontacticon.png").trigger("refresh");
    $("#username").val("");
    $("#mobile").val("");
    $("#email").val("");


});

$(document).on("pageshow", "#createContactPage", function () {

    setTimeout(function () {
        $.mobile.loading('hide');
    }, 1);

});

$(document).on("vclick", "#editContact", function () {

    $.mobile.navigate("#editContactPage");

});


$(document).on("click", "#editSave", function () {


    // find all contacts with id '1235'
    var options = new ContactFindOptions();
    options.filter = parseInt(localStorage.getItem("contactid"));
    options.multiple = false;
    var fields = ["id"];
    navigator.contacts.find(fields, onSuccess, onError, options);

    function onSuccess(contact) {
        // not sure if contacts is an array or not, since we specified multiple = false. check this.

        // modify and save the contact
        var displayName = $("#editusername").val();
        var number = $("#editmobile").val();
        var email = $("#editemail").val();
        var photo = $("#edit-user-image").attr('src');

        contact.displayName = displayName;

        if (number) {
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('mobile', number, true);
            contact.phoneNumbers = phoneNumbers;
        }

        if (email) {
            var emails = [];
            emails[0] = new ContactField('work', email, true);
            contact.emails = emails;
        }

        if (photo) {
            var photos = [];
            photos[0] = new ContactField('url', photo, true);
            contact.photos = photos;
        }


        contact.save(function(contact) {
            var index = binaryIndexOf(editedContact.id);
            var currentContact = neverContacts[index].contactInfo;
            currentContact.displayName = editedContact.displayName;
            currentContact.emails[0].value = editedContact.emails[0].value;
            localStorage.setItem("allcontacts", JSON.stringify(neverContacts));

            $.mobile.navigate("#ContactListPage");

        }, function(contactError) {
            navigator.notification.alert('Error contact save: '+contactError.code,function(){},'Title');
        });
        

       

    }

    function onError(contactError) {
        alert('Error!');
    };

   

});



$(document).on("pagebeforeshow", "#editContactPage", function () {


    var contactIndex = localStorage.getItem('clickedContact');

    var photo = localStorage.getItem('clickedImage');

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    if (localStorage.getItem('contactType') == "recent") {

        var contact = recentContacts[contactIndex].contactInfo;
        localStorage.setItem("contactid", contact.id);
        $("#edit-user-image").prop('src', photo).trigger("refresh");


        if (contact.displayName) {

            $("#editusername").val(contact.displayName);

        }
        if (contact.phoneNumbers) {

            $("#editmobile").val(contact.phoneNumbers[0].value);
            
        }
        if (contact.emails) {
            
            $("#editemail").val(contact.emails[0].value);

        }

       

    }
    else {

        var contact = neverContacts[contactIndex].contactInfo;
        localStorage.setItem("contactid", contact.id);
        $("#edit-user-image").prop('src', photo).trigger("refresh");


        if (contact.displayName) {
                
            $("#editusername").val(contact.displayName);

        }
        if (contact.phoneNumbers) {

            $("#editmobile").val(contact.phoneNumbers[0].value);

        }
        if (contact.emails) {

            $("#editemail").val(contact.emails[0].value);

        }

        
    }




});

$(document).on("pagebeforeshow", "#showContactPage", function () {

    

    $("#showContactInfo").empty();

    
    var contactIndex = localStorage.getItem('clickedContact');
    var licreate = "";

    var photo = localStorage.getItem('clickedImage');

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    if(localStorage.getItem('contactType') == "recent")
    {

        var contact = recentContacts[contactIndex].contactInfo;

        $('#profilePic').css({
            'width': windowWidth / 4, 'height': windowWidth / 4,
            'border-radius': '20px',
            '-webkit-border-radius': '20px',
            '-moz-border-radius': '20px',
            'border': '2px solid',
            'border-color': '#ccc',
            'border-color': 'rgba(255, 255, 255, 0.7)',
            'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.2)',
            'text-align': 'center',
            '-moz-background-size': '100% 100%',
            '-webkit-background-size': '100% 100%',
            'background-size': '100% 100%',
            "background-image": 'url('+photo+')'   
        });

        $(".showDisplayName").text(contact.displayName);
        if (contact.phoneNumbers) {
            licreate = licreate + '<li data-role="list-divider">Phone</li>';

            for (var i = 0; i < contact.phoneNumbers.length; i++) {
                licreate = licreate + '<li><p class="ui-li-aside dialnow"><img class="dialnow" value="' + contact.phoneNumbers[i].value + '" height="40" width="40" src ="images/call-icon.png" class="ui-li-icon-right" /></p>' + contact.phoneNumbers[i].type + '<br>' + contact.phoneNumbers[i].value + '</li>';
            }
        }
        if(contact.emails)
        {
            licreate = licreate + '<li data-role="list-divider">Email</li>';

            for (var i = 0; i < contact.emails.length; i++) {
                licreate = licreate + '<li>' + contact.emails[i].type + '<br>' + contact.emails[i].value + '</li>';
            }

        }

        if (contact.addresses) {
            licreate = licreate + '<li data-role="list-divider">Address</li>';

            for (var i = 0; i < contact.addresses.length; i++) {
                licreate = licreate + '<li>' + contact.addresses[i].type + '<br>' + contact.addresses[i].formatted + '</li>';
            }

        }

    }
    else
    {

        var contact = neverContacts[contactIndex].contactInfo;
       
        $('#profilePic').css({
            'width': windowWidth / 4, 'height': windowWidth / 4,
            'border-radius': '20px',
            '-webkit-border-radius': '20px',
            '-moz-border-radius': '20px',
            'border': '2px solid',
            'border-color': '#ccc',
            'border-color': 'rgba(255, 255, 255, 0.7)',
            'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.2)',
            'text-align': 'center',
            '-moz-background-size':'100% 100%',
        '-webkit-background-size':'100% 100%',
        'background-size':'100% 100%',
            "background-image": 'url('+photo+') '

        });

        $(".showDisplayName").text(contact.displayName);
        if (contact.phoneNumbers) {
            licreate = licreate + '<li data-role="list-divider">Phone</li>';

            for (var i = 0; i < contact.phoneNumbers.length; i++) {
                licreate = licreate + '<li><p class="ui-li-aside dialnow"><img class="dialnow" value="' + contact.phoneNumbers[i].value + '" height="40" width="40" src ="images/call-icon.png" class="ui-li-icon-right" /></p>' + contact.phoneNumbers[i].type + '<br>' + contact.phoneNumbers[i].value + '</li>';
            }
        }
        if (contact.emails) {
            licreate = licreate + '<li data-role="list-divider">Email</li>';

            for (var i = 0; i < contact.emails.length; i++) {
                licreate = licreate + '<li>' + contact.emails[i].type + '<br>' + contact.emails[i].value + '</li>';
            }

        }

        if (contact.addresses) {
            licreate = licreate + '<li data-role="list-divider">Address</li>';

            for (var i = 0; i < contact.addresses.length; i++) {
                licreate = licreate + '<li>' + contact.addresses[i].type + '<br>' + contact.addresses[i].formatted + '</li>';
            }

        }
    }

    $('#showContactInfo').append(licreate).listview("refresh");
    setTimeout(function () {
        $.mobile.loading('hide');
    }, 1);

});


function onDeviceReady() {
    // Handle the Cordova pause and resume events
    

    document.addEventListener('pause', onPause.bind(this), false);
    document.addEventListener('resume', onResume.bind(this), false);

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;


    $("input[data-type='search']").on('input', function () {
        if($(this).val())
        {
            $("#recentContacts").hide();
            $("#dividerAll").hide();
            $("#dividerRecent").hide();

        }
        else
        {
            $("#recentContacts").show();
            $("#dividerAll").show();
            $("#dividerRecent").show();

        }
    });



    $('.ui-input-clear').on('click', function () {
        $("#recentContacts").show();
        $("#dividerAll").show();
        $("#dividerRecent").show();


    });

    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
    

    var options = new ContactFindOptions();
    options.filter = "";          // empty search string returns all contacts
    options.multiple = true;
    var filter = ["displayName", "addresses", "photos","phoneNumbers", "emails", "name"];   // return contact.displayName 
    
    if (localStorage.getItem("allcontacts") && localStorage.getItem("recentlogs")) {

       

        recentContacts = JSON.parse(localStorage.getItem("recentlogs"));

        neverContacts = JSON.parse(localStorage.getItem("allcontacts"));
        quickDisplay( recentContacts,neverContacts);
    }
    else {

        navigator.contacts.find(filter, onSuccess, onError, options);
    }


    function onSuccess(contacts) {


        window.plugins.calllog.list(null, successCall, failCall);

        function successCall(succ) {

            sortAndDisplay(contacts, succ);
        }

        

        
        function failCall(fail) {

            alert("failure");
        }


    }

    function sortAndDisplay(contacts, succ) {
        for (var i = 0; i < contacts.length; i++) {
            if (!contacts[i].phoneNumbers) {

                continue;
            }
            else {
                if (contacts[i].displayName) {
                    contacts[i].displayName = capitaliseFirstLetter(contacts[i].displayName);
                    var nevercontact = { contactInfo: contacts[i], timeinteracted: "never interacted", photovalid: "notknown" };
                    neverContacts.push(nevercontact);

                }
            }
            for (var j = 0; j < succ.rows.length; j++) {

                if ((succ.rows[j].cachedName != null) && (contacts[i].displayName == succ.rows[j].cachedName)) {

                    var contact = { contactInfo: contacts[i], timeinteracted: succ.rows[j].date, photovalid: "notknown" };
                    recentContacts.push(contact);
                    break;
                }

            }
        }

        recentContacts.sort(compare);
        neverContacts.sort(compareNames);

        displaysortedList(recentContacts, neverContacts);


    }

    function compare(a, b) {
        if (a.timeinteracted < b.timeinteracted)
            return -1;
        if (a.timeinteracted > b.timeinteracted)
            return 1;
        return 0;
    }

    function compareNames(a, b) {
        if (a.contactInfo.displayName < b.contactInfo.displayName)
            return 1;
        if (a.contactInfo.displayName > b.contactInfo.displayName)
            return -1;
        return 0;
    }

    function onError(contactError) {
    }



    // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
};

function onPause() {
    // TODO: This application has been suspended. Save application state here.
};

function onResume() {
    // TODO: This application has been reactivated. Restore application state here.
};
    


function onFileSystemSuccess(fileSystem) {
}

function fail(error) {
    console.log(error.code);
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function binaryIndexOf(searchElement) {

   
    var minIndex = 0;
    var maxIndex = neverContacts.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        if(neverContacts[minIndex].contactInfo.id == searchElement)
        {
            return minIndex;
        }
        minIndex++;
    }
    return -1;
}




