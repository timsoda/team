var alltaskpointsG = "";
var alltaskpointsGc = 0;
var allaccomppG = "";
var allaccomppGc = 0;
var filemxee_boom = getCookie("filemxee_boom");
var dexlemxx_moon = getCookie("dexlemxx_moon");
RooPostAll();
MeltolaBio();
$('.summernote').summernote({
	
});
function crowtasksummernote() {
    $('#crowtask').summernote({
        toolbar: [
        /*     // [groupName, [list of button]]
		['style', ['bold', 'italic', 'underline', 'clear']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['fontsize', ['fontsize']],
		//['color', ['color']],
		['para', ['ul', 'ol', 'paragraph']],
		['table', ['table']],
		['height', ['height']] */
          ]
    });
}
var dashboardjikem = document.getElementById("dashboardmenu");
var taskjikem = document.getElementById("taskmenu");
var accomplishedjikem = document.getElementById("accomplishedmenu");


document.getElementById("taskmenu").addEventListener("click", function() {    
    dashboardjikem.classList.remove("active");
    accomplishedjikem.classList.remove("active");
    taskjikem.classList.add("active");

    document.getElementById("tasktaper").style.display = "block";
    document.getElementById("accomplishedtasktaper").style.display = "none";
    nomancy()
});
document.getElementById("accomplishedmenu").addEventListener("click", function() { 
    dashboardjikem.classList.remove("active");
    taskjikem.classList.remove("active");
    accomplishedjikem.classList.add("active");

    document.getElementById("tasktaper").style.display = "none";
    document.getElementById("accomplishedtasktaper").style.display = "block";
    nomancy();
});
function MeltolaBio() {
    var gnduvgag = "gnduvgag";
    $.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		dataType: "json",
		data: {gnduvgag: gnduvgag, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon },
		success: function(RespondsMem){
            var SmekFro = RespondsMem;
            document.getElementById("mtrack").innerHTML = SmekFro.map(hymc => hymc.tstat);
            document.getElementById("mname").innerHTML = SmekFro.map(hymc => hymc.tname);
            
        }
    });
}
document.getElementById("mcopy").addEventListener("click", function() { 
    var copyText = document.getElementById("mtrack").innerHTML;
    //copyText.select();
    //document.execCommand("copy");
    navigator.clipboard.writeText(copyText)
    document.getElementById("mcoppied").innerHTML ="Stutus Code Coppid to Clipboard " + copyText;
  setTimeout(upup, 3000);
        function upup() {
        document.getElementById("mcoppied").innerHTML = "";
        }
});
function RooPostAll() {
    var vjsoienas = "vjsoienas";
    var yxaowwp = "yxaowwp";
    $.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		dataType: "json",
		data: {vjsoienas: vjsoienas, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
		success: function(ResponsPost){
        alltaskpointsG = ResponsPost;
        alltaskpointsGc = 1;
        var alltaskpLg =  alltaskpointsG.length;
        var oid = alltaskpointsG.map(bill => bill.id);
        
        $.ajax({
            type: "POST",
            url: "https://samuelproject.000webhostapp.com/serve/", 
            dataType: "json",
            data: {yxaowwp: yxaowwp, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
            success: function(ResponsAccomp){
            allaccomppG = ResponsAccomp;
            allaccomppGc = 1;
            var allaccomppLe =  allaccomppG.length;
            var pid = allaccomppG.map(bill => bill.pid);
            var colmini = [];
            var clemo = ""
            var juneman = [];
            var ovoke = []
            var element = {}, cart = [];
            //var ;
            var vomws = "";
            var livido = [];
                    var lonecount = 0;
                    var ltwocount = 0;
                    var lthocount = 0;
                   
                   if(oid[0] == "" && pid[0] == ""){
                      
                   }else if(oid[0] !== "" && pid[0] == ""){
                    RooPostSet();
                   }else { //check if submitted any taks
                    allaccomppG.forEach(item => {
                        colmini.push(item.pid); 
                    });
                    for (let n = 0; n < colmini.length; n++) {
                        for (let i = 0; i < alltaskpointsG.length; i++) {
                            if ( alltaskpointsG[i].id == colmini[n]) { //If global variable has this id
                             ovoke.push(alltaskpointsG.splice(i, 1)) 
                             }
                         }
                    }
                   
                   let Orows = ovoke.length;
                   for (let i = 0; i < Orows; i++) {
                       let OmanL = ovoke[i].length;
                       
                       for (let n = 0; n < OmanL; n++) {
                      
                           juneman.push(ovoke[i][n])
                       }
                   }
                   
                  
                   moonone()
                  
                    function moonone() {
                    RooPostSet();
                    clemo = juneman;
                    moontwo() 
                    alltaskpointsG = alltaskpointsG.concat(juneman);
                   
                    }
                    function moontwo() {
                        AccompTSet(clemo)
                    } 
                }
            }
        });
		}
	});
}
function RooPostSet() {
    var no = 1;
            var DVZ = "";
            DVZ += '<table id="postlisttable" cellspacing="24px" cellpadding="10px" class="display table table-head-bg-secondary " style="width:100%">'+
            '<thead>'+
                '<tr>'+ 
                    '<th style="width:1%" scope="col">#</th>'+ 
		'<th style="width:10%" scope="col">Tutorial</th>'+
                    '<th style="width:5%" scope="col">Read</th>'+	
                    '<th style="width:5%" scope="col">Task</th>'+
                '</tr>'+
                '</thead>'+
                '<tbody >';	
            alltaskpointsG.forEach(function(item, index) {
			DVZ +='<tr>';
			/* DVZ += '<td>';
			DVZ += no++;
			DVZ += '</td>';  */
			DVZ += '<td>'+item.est+'</td>'; 
			DVZ +='<td>'+item.title+'</td>'+
			
			'<td> <button type="button" class="btn btn-primary linkmod" id="view'+item.id+'">Read</button> </td>'+
			'<td> <button type="button" class="btn btn-warning linkmod" id="edit'+item.id+'">Submit Task</button> </td>'+
			'</tr>';
                    
                });
                DVZ += '</tbody>'+
                '</table>';
                $("#tasktaperT").html(DVZ);
                $("#postlisttable").DataTable();
              
                alltaskpointsG.forEach(function(item, index) { 
                $('#postlisttable').on('click', '#view'+item.id+'', function(event) {
                    var wudh = item.id;
                    RooPostView(wudh);
                    });
                });
                alltaskpointsG.forEach(function(item, index) { 
                $('#postlisttable').on('click', '#edit'+item.id+'', function(event) {
                    var wudh = item.id;
                    RooPostSub(wudh);
                    });
                });
}
function RooPostView(wudh){
    var bkll = alltaskpointsG.filter(jnbj => jnbj.id == wudh); 
		var est = bkll.map(miaj => miaj.est); 
		var title = bkll.map(miaj => miaj.title); 
		var post = bkll.map(miaj => miaj.post); 
		var task = bkll.map(miaj => miaj.task); 
		var note = bkll.map(miaj => miaj.note); 

    PEK = `
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title text-center">${title}</h4>
            </div>
            <div class="card-body">
            ${post}
            </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title">Task</h4>
            </div>
            <div class="card-body">
            ${task}
            </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title">Note</h4>
            </div>
            <div class="card-body">
            ${note}
            </div>
            <div class="card-footer ">
            <hr>
            <div class="stats">
            <!--<button class="btn btn-danger linkmod" onclick="backButton()">Go Back</button>-->
            </div>
        </div>
            </div>
        </div>
    </div>

    `;
    $("#tasktaperP").html(PEK);
    document.getElementById("tasktaperOr").style.display = "none";
}
function RooPostSub(wudh) {
    var bkll = alltaskpointsG.filter(jnbj => jnbj.id == wudh); 
	var id = bkll.map(miaj => miaj.id); 
	var est = bkll.map(miaj => miaj.est); 
	var title = bkll.map(miaj => miaj.title);
	//var post = bkll.map(miaj => miaj.post); 
	//var task = bkll.map(miaj => miaj.task); 
	//var note = bkll.map(miaj => miaj.note);

    PEK = `<div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title text-center" id="tasktaperShead">${title}</h4>
                <div id="crowtaskUxc"></div>
            </div>
            <div class="card-body" id="tasktaperSbody">
                    <form name="membertask" id="membertask" onsubmit="return false; " action="" method="POST">
                    <input type="hidden" id="crowtkkd" value="${id}" >
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label><b></b></label>
                                <span id="crowtasktxt"><textarea rows="4" cols="80" class="form-control summernote" name="crowtask" id="crowtask" ></textarea></span>
                            </div>
                        </div>
                    </div>
                    <div id="mtpsubmit">
                    <button type="submit" class="btn btn-info btn-fill pull-right linkmod" onclick="memtaskpostsubmit();">Submit</button>
                    <button  type="reset" class="btn btn-danger btn-fill pull-right linkmod" onclick="backButton()">Cancel</button>
                    </div>
                    <br>
                    <button style="display:none;" id="mtpsubmitspin" class="btn btn-info pull-right" disabled>
                      <span class="spinner-border spinner-border-sm"></span>
                      Loading..
                    </button>
                    

                    <!--<div class="clearfix"></div>-->
                    </form>
                </div>
            </div>
        </div>
    </div>	`;
    $("#tasktaperSt").html(PEK);
    crowtasksummernote();
    document.getElementById("tasktaperOr").style.display = "none";
}
function memtaskpostsubmit(){
    var crowtask  = document.getElementById("crowtask").value; 
	var crowtaskUxc = true; 
	
		// Validate crowtask
		if(myTrim(crowtask) == "") {
        printError("crowtaskUxc", "<i class='fas fa-window-close'></i> This field cannot be empty");
    } else {
        // Check if its lesser than 0
        if(myTrim(crowtask).length < 0) {
            printError("crowtaskUxc", "<i class='fas fa-window-close'></i> This field cannot be empty.");
        } else{
            printError("crowtaskUxc", "");
            crowtaskUxc = false;
        }
    } 
		// Prevent the form from being submitted if there are any errors
	if ((crowtaskUxc) == true) {
	   return false;
    } else {
        memtaskpostQuater();
    } 
}
function memtaskpostQuater() {
    var crowtask  = document.getElementById("crowtask").value;
    var crowtkkd  = document.getElementById("crowtkkd").value;
    
    document.getElementById("mtpsubmit").style.display = 'none';
    document.getElementById("mtpsubmitspin").style.display = 'block';
	
	$.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		dataType: "json",
		data: {crowtask: crowtask, crowtkkd: crowtkkd, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
		success: function(data){
			$("#rufusLohn").html(data);
			
		var slf = data; 
        if(slf.TextMsg == "reload"){
            window.location.reload();
        }else if(slf.TextMsg == "none"){
            RooPostAll();
            document.getElementById("tasktaperSbody").style.display = 'none';
			document.getElementById("tasktaperShead").classList.add("text-success");
			document.getElementById("tasktaperShead").innerHTML = 'Task Submitted<br> <button class="btn btn-danger linkmod" onclick="backButton()">Back</button>';
        }else{
			document.getElementById("mtpsubmit").style.display = 'block';
            document.getElementById("mtpsubmitspin").style.display = 'none';
			document.getElementById("mMsg1").classList.add("text-danger");
			document.getElementById("mMsg1").innerHTML = 'Error!<br>Check Your Form or Refresh the page';
        }
		}
		 
	});
}
function AccompTSet(clemo){
    var no = 1;
            var DVZ = "";
            DVZ += '<table id="accmlisttable" cellspacing="24px" cellpadding="10px" class="display table table-head-bg-secondary " style="width:100%">'+
            '<thead>'+
                '<tr>'+ 
                    '<th style="width:1%" scope="col">#</th>'+ 
		'<th style="width:10%" scope="col">Tutorial</th>'+
                    '<th style="width:5%" scope="col">Read</th>'+	
                    '<th style="width:5%" scope="col">Task</th>'+
                '</tr>'+
                '</thead>'+
                '<tbody >';	
            clemo.forEach(function(item, index) {
			DVZ +='<tr>';
			/* DVZ += '<td>';
			DVZ += no++;
			DVZ += '</td>';  */
			DVZ += '<td>'+item.est+'</td>';  
			DVZ +='<td>'+item.title+'</td>'+
			
			'<td> <button type="button" class="btn btn-primary linkmod" id="aview'+item.id+'" >Task</button> </td>'+
			'<td> <button type="button" class="btn btn-warning linkmod" id="sview'+item.id+'">Submittion</button> </td>'+
			'</tr>';
                    
                });
                DVZ += '</tbody>'+
                '</table>';
                $("#accomplishedtasktB").html(DVZ);
                $("#accmlisttable").DataTable();
              
                clemo.forEach(function(item, index) { 
                $('#accmlisttable').on('click', '#aview'+item.id+'', function(event) {
                    var wudh = item.id;
                    RooPostView(wudh);
                    document.getElementById("tasktaper").style.display = "block";
                    document.getElementById("accomplishedtasktaper").style.display = "none";
                    });
                });
                clemo.forEach(function(item, index) { 
                $('#accmlisttable').on('click', '#sview'+item.id+'', function(event) {
                    var wudh = item.id;
                    RooPostAccomplished(wudh);
                    });
                });
}
function RooPostAccomplished(wudh){
    var bkll = allaccomppG.filter(jnbj => jnbj.pid == wudh); 
    var pid = bkll.map(miaj => miaj.pid); 
    var taskwork = bkll.map(miaj => miaj.taskwork); 
    var remark = bkll.map(miaj => miaj.remark); 
    var score = bkll.map(miaj => miaj.score); 
    var tdate = bkll.map(miaj => miaj.tdate); 

    var JWC = `<div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
            ${taskwork}
            </div>
            <div class="card-footer ">
            <hr>
            <div class="stats">
            <!--<button class="btn btn-danger linkmod" onclick="backButton()">Go Back</button>-->
            </div>
        </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title">Score</h4>
            </div>
            <div class="card-body">
            ${score}
            </div>
            <div class="card-footer ">
            <hr>
            <div class="stats">
            <!--<button class="btn btn-danger linkmod" onclick="backButton()">Go Back</button>-->
            </div>
        </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title">Remark</h4>
            </div>
            <div class="card-body">
            ${remark}
            </div>
            <div class="card-footer ">
            <hr>
            <div class="stats">
            <!--<button class="btn btn-danger linkmod" onclick="backButton()">Go Back</button>-->
            </div>
        </div>
            </div>
        </div>
    </div>`;

    $("#accomplishedSmt").html(JWC);
    document.getElementById("accomplishedtkOn").style.display = "none";
}
function nomancy() {
    document.getElementById("tasktaperOr").style.display = "block";
    document.getElementById("accomplishedtkOn").style.display = "block";
    document.getElementById("tasktaperP").innerHTML = "";
    document.getElementById("tasktaperSt").innerHTML = "";
    document.getElementById("accomplishedSmt").innerHTML = "";
}
function backButton(){
    nomancy();
}
document.getElementById("logout").addEventListener("click", function() { 
    LogOutCool();
});
function LogOutCool(){
    var xriodqryycc = "xriodqryycc";
    $.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		data: {xriodqryycc: xriodqryycc, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
		success: function(LogOutVotersData){
			//$("#SignHer").html(LogOutVotersData);  
			document.cookie = "filemxee_boom= 0 ; expires=Thu, 18 Dec 1999 12:00:00 UTC; path=/";
			document.cookie = "dexlemxx_moon= 0; expires=Thu, 18 Dec 1999 12:00:00 UTC; path=/";
			window.location.reload();
		}
		 
	});
}
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  }
  
  String.prototype.nl2br = function(){
      return this.replace(/\n/g, "<br />");
  }
  function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
  } 
