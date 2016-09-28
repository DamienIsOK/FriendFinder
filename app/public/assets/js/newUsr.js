$(document).ready(function(){	

		$('#submit').on('click', function () {
      
      var result = [];
      
      for(var i = 1; i < 11; i++){
      		var value = JSON.parse($( "#question" + i + " option:selected" ).val())
        	result.push(value)
      		}

				var newFriend = {
					name: $('#usr').val(),
					photo: $('#photo').val(),
					scores: result,
					total: 0
				};

				console.log(newFriend);


				$.post('/survey', newFriend)
					.done(function (data) {
						console.log(data);
					});

				return false;
			});

});