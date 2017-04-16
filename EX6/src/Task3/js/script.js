$(function(){    
    var i = 1;  
    $("#addRow").bind('click', function() {   
        $(this).before(
            '<tr class="Tr">' + '<td class="pos">' + i + '</td>' + '<td class="input">' + '</td>' + '<td class="delbtn" id="deleteRow' + i + '">DELETE' + '</td>' + '</tr>');   
        i++;  

        $(".Tr").each(function(index) {  
            $(this).find('td:first').text(index + 1);  
        });  

        $("#deleteRow" + (i - 1)).bind('click', function() {  
            var current = $(this).parent();  
            current.remove();  
            $(".Tr").each(function(index) {   
                $(this).find('td:first').text(index + 1);  
            });  
        });  
    });  
}); 