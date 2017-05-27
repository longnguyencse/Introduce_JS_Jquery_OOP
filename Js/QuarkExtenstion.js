/**
 * Created by nqlong on 15-Sep-16.
 */
(function ($) {
    var QuarkExtension = {
        Default : {
            //TODO: add member for Object default
        }
        //TODO: add more member and fuction
    };
    $.extend(QuarkExtension, {
      //init data
        init : function () {
            //create member
            this.isMember = true;
            //
            this.setupEvent();
        },

        //setup Quark Extension event
        setupEvent : function () {
          //TODO: set up Event
          var selector = "#btn_add";
          
          $(selector).on('click', $.proxy(this.hander, this));
          // jQuery.proxy( function, context )
          var sumEle = "#btn_sum";
          var data = [15,25,45];
          $(sumEle).first().on('click', $.proxy(this.sumNumber, this, data));
          // jQuery.proxy( function, context [, additionalArguments ] )
          console.log('SetupEvent');

        },
        hander : function (event) {
            alert("Button click");
        },
        // agument firsr is data
        sharefunction: function(data, event) {
            data *= 4;
            alert('value of data ' + data);
        },
        // agument firsr is data
        // event.target --> can get target
        // event can not pass as argmument
        sumNumber : function(data) {
            alert('Sum of data ' + data[0] + ' + ' + data[1] + ' + ' + data[2] + ' = ' + parseInt(data[0] + data[1] + data[2]));

        }
    });
    //create object global
    window.QuarkExtension = QuarkExtension;
        $(document).ready(function () {
        QuarkExtension.init();
    });

    QuarkExtension.sharefunction(50);

}(jQuery));