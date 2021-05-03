var postclovkGl = "";
var postclovkGlC = 0;
var MsubmPack = "";
var MsubmPackGlC = 0;
var dashjikem = document.getElementById("dashmenu");
var postjikem = document.getElementById("postmenu");
var completedjikem = document.getElementById("completedmenu");
var filemxee_boom = getCookie("filemxee_boom");
var dexlemxx_moon = getCookie("dexlemxx_moon");
postallList();
MeltolaBio();
$('.summernote').summernote({
	
});
function postsummernote() {
    $('#post').summernote({
        toolbar: [
            ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']],
          ]
    });
}
function taskasksummernote() {
    $('#taskask').summernote({
        toolbar: [
            ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']],
          ]
    });
}
function ndescribesummernote() {
    $('#ndescribe').summernote({
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            //['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['height', ['height']]
          ]
    });
}
function smscoresummernote() {
    $('#sbscore').summernote({
        toolbar: [
            ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']],
          ]
    });
}
function smremarksummernote() {
    $('#sbremark').summernote({
        toolbar: [
            ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']],
          ]
    });
}
function MeltolaBio() {
    var gnduvgag = "gnduvgag";
    $.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		dataType: "json",
		data: {gnduvgag: gnduvgag, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
		success: function(RespondsMem){
            var SmekFro = RespondsMem;
           var ttrack =  SmekFro.map(hymc => hymc.ttrack)
          
           document.getElementById("wrapman").style.display = "block"; //temporary till I register admin type, then comment it out

            //console.log(ttrack);
            /* if(ttrack == "unor"){
                document.getElementById("wrapman").innerHTML= "";
                window.location.href = "./";
            }else{
                document.getElementById("wrapman").style.display = "block";
            } */
            
        }
    });
}
document.getElementById("tpsubmit").addEventListener("click", function(event) { 
    event.preventDefault();
    var title  = document.taskPost.title.value;	
	var post  = document.taskPost.post.value;	
	var taskask  = document.taskPost.taskask.value;	
	var ndescribe  = document.taskPost.ndescribe.value; 
    var lfatme  = document.taskPost.lfatme.value;
	
	if(myTrim(lfatme) == "udd"){
        var passup  = document.taskPost.passup.value; 
        var titleUxc = postUxc = taskaskUxc = passupUxc = true; 
        if(myTrim(passup) > 0) {
            passupUxc = false;
        } 
	}else{
        var titleUxc = postUxc = taskaskUxc = true; 
	}

	
	
		// Validate title
		if(myTrim(title) == "") {
        printError("titleUxc", "* This field cannot be empty");
    } else {
        // Check if its lesser than 0
        if(myTrim(title).length < 0) {
            printError("titleUxc", "* This field cannot be empty.");
        } else{
            printError("titleUxc", "");
            titleUxc = false;
        }
    }
		// Validate post
		if(myTrim(post) == "") {
        printError("postUxc", "* This field cannot be empty");
    } else {
        // Check if its lesser than 0
        if(myTrim(post).length < 0) {
            printError("postUxc", "* This field cannot be empty.");
        } else{
            printError("postUxc", "");
            postUxc = false;
        }
    }
		// Validate taskask
		if(myTrim(taskask) == "") {
        printError("taskaskUxc", "* This field cannot be empty");
    } else {
        // Check if its lesser than 0
        if(myTrim(taskask).length < 0) {
            printError("taskaskUxc", "* This field cannot be empty.");
        } else{
            printError("taskaskUxc", "");
            taskaskUxc = false;
        }
    }
		
		// Prevent the form from being submitted if there are any errors
	if ((titleUxc || postUxc || taskaskUxc) == true) {
	   return false;
    } else {
        CommencePost();
    }
});
function CommencePost(){
    var title  = document.getElementById("title").value;	
	var post  = document.getElementById("post").value;	
	var taskask  = document.getElementById("taskask").value;	
	var ndescribe  = document.getElementById("ndescribe").value;
    var lfatme  = document.getElementById("lfatme").value;

    document.getElementById("tpsubmit").style.display = "none";
	document.getElementById("tpsubmitspin").style.display = "block";
	
    if(myTrim(lfatme) == "udd"){
        var passup  = document.getElementById("passup").value;
        $.ajax({
            type: "POST",
            url: "https://samuelproject.000webhostapp.com/serve/", 
            dataType: "json",
            data: {title: title, post: post, taskask: taskask, ndescribe: ndescribe, lfatme: lfatme, passup: passup, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
            success: function(data){
                
            var ics = data;
            if(ics.TextMsg == "reload"){
                window.location.href = "./";
            }
            else if(ics.TextMsg == "none"){
                postallList();
                document.getElementById("msgdiv").style.display = "block";
                document.getElementById("taskPostDiv").style.display = "none";
                document.getElementById("pmsg").classList.add("text-success");
                document.getElementById("pmsg").innerHTML = 'Post has be Published';
                
                setTimeout(upup, 5000);
                function upup() {
                    document.getElementById("msgdiv").style.display = "none";
                    document.getElementById("taskPostDiv").style.display = "block";
    
                    document.getElementById("tpsubmit").style.display = "block";
                    document.getElementById("tpsubmitspin").style.display = "none";
    
                    stabilis()
                }
            }else{
                document.getElementById("tpsubmit").style.display = "block";
                document.getElementById("tpsubmitspin").style.display = "none";
                document.getElementById("pmsg").classList.add("text-danger");
                document.getElementById("pmsg").innerHTML = 'Error!<br>Check Your Form or Refresh the page';
            }
            }
             
        });

    }else if(myTrim(lfatme) == "uaa"){
        $.ajax({
            type: "POST",
            url: "https://samuelproject.000webhostapp.com/serve/", 
            dataType: "json",
            data: {title: title, post: post, taskask: taskask, ndescribe: ndescribe, lfatme: lfatme, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
            success: function(data){
                
            var ics = data;
            if(ics.TextMsg == "reload"){
                window.location.href = "./";
            }
            else if(ics.TextMsg == "none"){
                postallList();
                document.getElementById("msgdiv").style.display = "block";
                document.getElementById("taskPostDiv").style.display = "none";
                document.getElementById("pmsg").classList.add("text-success");
                document.getElementById("pmsg").innerHTML = 'Post has be Published';
                
                setTimeout(upup, 5000);
                function upup() {
                    document.getElementById("msgdiv").style.display = "none";
                    document.getElementById("taskPostDiv").style.display = "block";
    
                    document.getElementById("tpsubmit").style.display = "block";
                    document.getElementById("tpsubmitspin").style.display = "none";
    
                    stabilis()
                }
            }else{
                document.getElementById("tpsubmit").style.display = "block";
                document.getElementById("tpsubmitspin").style.display = "none";
                document.getElementById("pmsg").classList.add("text-danger");
                document.getElementById("pmsg").innerHTML = 'Error!<br>Check Your Form or Refresh the page';
            }
            }
             
        });
    }
	
}
document.getElementById("dashmenu").addEventListener("click", function() { 
    dashjikem.classList.add("active");
    postjikem.classList.remove("active");
    completedjikem.classList.remove("active");

    document.getElementById("taskPostDiv").style.display = "block";
    document.getElementById("PostListDiv").style.display = "none";
    document.getElementById("AccomplishedListDiv").style.display = "none";
    stabilis();
});
document.getElementById("postmenu").addEventListener("click", function() { 
    dashjikem.classList.remove("active");
    postjikem.classList.add("active");
    completedjikem.classList.remove("active");

    document.getElementById("taskPostDiv").style.display = "none";
    document.getElementById("PostListDiv").style.display = "block";
    document.getElementById("AccomplishedListDiv").style.display = "none";
    stabilis();
});
document.getElementById("completedmenu").addEventListener("click", function() { 
    dashjikem.classList.remove("active");
    postjikem.classList.remove("active");
    completedjikem.classList.add("active");

    document.getElementById("taskPostDiv").style.display = "none";
    document.getElementById("PostListDiv").style.display = "none";
    document.getElementById("AccomplishedListDiv").style.display = "block";
    stabilis();
});
function postallList(){
    var vjsoienas = "advjsoienas";
    $.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		dataType: "json",
		data: {vjsoienas: vjsoienas, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
		success: function(ListResponds){
            postclovkGl = ListResponds;
            postclovkGlC = 1;
            Peopleweysubmit();
			var no = 1;
            var DVZ = "";
            DVZ += '<table id="listtable" cellspacing="24px" cellpadding="10px" class="display table table-head-bg-secondary " style="width:100%">'+
            '<thead>'+
                '<tr>'+ 
                    '<th style="width:1%" scope="col">#</th>'+ 
		'<th style="width:10%" scope="col">Title</th>'+
                    '<th style="width:5%" scope="col">View</th>'+	
                    '<th style="width:5%" scope="col">Update</th>'+	
                    '<th style="width:5%" scope="col">Delete</th>'+	
                '</tr>'+
                '</thead>'+
                '<tbody >';	
            var postPack = ListResponds;
            postPack.forEach(function(item, index) {
			DVZ +='<tr>';
			DVZ += '<td>';
			DVZ += no++;
			DVZ += '</td>'; 
			DVZ +='<td>'+item.title+'</td>'+
			'<td> <button type="button" class="btn btn-primary linkmod" id="view'+item.id+'">View</button> </td>'+
			'<td> <button type="button" class="btn btn-warning linkmod" id="edit'+item.id+'">Update</button> </td>'+
			'<td> <button type="button" class="btn btn-danger linkmod" id="dele'+item.id+'">Delete</button> </td>'+
			'</tr>';
                    
                });
                DVZ += '</tbody>'+
                '</table>';
                $("#PostListIv").html(DVZ);
                $("#listtable").DataTable();
                
                postPack.forEach(function(item, index) { 
                    $('#listtable').on('click', '#view'+item.id+'', function(event) {
                      var fbxg = item.id;
                       postwithView(fbxg);
                      });
                    });
                postclovkGl.forEach(function(item, index) { 
                    $('#listtable').on('click', '#edit'+item.id+'', function(event) {
                        var fbxg = item.id;
                        postwithEdit(fbxg);
                        });
                    });/*
                postclovkGl.forEach(function(item, index) { 
                    $('#listtable').on('click', '#dele'+item.id+'', function(event) {
                        var fbxg = item.id;
                        teampostfortaskDelete(fbxg);
                        });
                    }); */
		}
	});
}
function postwithView(fbxg){
    var eqlv = postclovkGl.filter(kwci => kwci.id == fbxg); 
		var title = eqlv.map(vytb => vytb.title); 
		var post = eqlv.map(vytb => vytb.post); 
		var task = eqlv.map(vytb => vytb.task); 
		var note = eqlv.map(vytb => vytb.note); 
		var date = eqlv.map(vytb => vytb.date); 
		var ip = eqlv.map(vytb => vytb.ip); 
	//var wriptups = nxts.map(bill => bill.wriptups.nl2br()); //to breakdown long test (without summernote)
    document.getElementById("PostListIvT").style.display = "none";
    document.getElementById("PostListIv").style.display = "none";
    
    DVZ = `
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
            </div>
        </div>
    </div>




    <!--<button class="btn btn-danger" onclick="backButton()"><i class="fas fa-arrow-left"></i></button>-->
    `;
    $("#PostListIvVw").html(DVZ);
}
function postwithEdit(fbxg){
	var eqlv = postclovkGl.filter(kwci => kwci.id == fbxg); 
	var id = eqlv.map(vytb => vytb.id); 
	var title = eqlv.map(vytb => vytb.title); 
	var post = eqlv.map(vytb => vytb.post); 
	var task = eqlv.map(vytb => vytb.task); 
	var note = eqlv.map(vytb => vytb.note); 
	//var date = eqlv.map(vytb => vytb.date); 
	//var ip = eqlv.map(vytb => vytb.ip); 
	document.getElementById("title").value = title; 

    document.getElementById("posttxt").innerHTML = '<textarea id="post" name="post" class="form-control"></textarea>';
    document.getElementById("post").value = post; 
	postsummernote();
    
    document.getElementById("taskasktxt").innerHTML = '<textarea id="taskask" name="taskask" class="form-control"></textarea>';
    document.getElementById("taskask").value = task; 
	taskasksummernote();
    
    document.getElementById("ndescribetxt").innerHTML = '<textarea id="ndescribe" name="ndescribe" class="form-control"></textarea>';
    document.getElementById("ndescribe").value = note; 
	ndescribesummernote();

    document.getElementById("taskPostDiv").style.display = "block";
    document.getElementById("PostListDiv").style.display = "none";
    document.getElementById("AccomplishedListDiv").style.display = "none";

    document.getElementById("lfatme").value = "udd";
    DVZ = `<input type="hidden" id="passup" value="${id}">`;
    $("#tokic").html(DVZ);

	/*
    
    document.getElementById("XenVD").innerHTML = `<button class="btn btn-primary" onclick="teampostfortaskView(${id})">View</button>        
    <button class="btn btn-danger" onclick="teampostfortaskDelete(${id})">Delete</button>`;
    document.getElementById("XenBack").innerHTML = '<button class="btn btn-danger" onclick="backButton()"><i class="fas fa-arrow-left"></i></button>';
    
    document.getElementById("viewdiv").innerHTML = "";
    document.getElementById("delldiv").innerHTML = "";
    document.getElementById("listdiv").style.display = "none";
    document.getElementById("formDiv").style.display = "block";
    document.getElementById("createbutton").style.display = "none";
    */
}
function Peopleweysubmit() {
    var wsudqlisx = "wsudqlisx";
    $.ajax({
		type: "POST",
		url: "https://samuelproject.000webhostapp.com/serve/", 
		dataType: "json",
		data: {wsudqlisx: wsudqlisx, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
		success: function(RespondsThem){
            MsubmPack = RespondsThem;
            MsubmPackGlC = 1;
            //console.log(Msubm)
            var no = 1;
            var DVZ = "";
            DVZ += '<table id="taskdonetable" cellspacing="24px" cellpadding="10px" class="display table table-head-bg-secondary " style="width:100%">'+
            '<thead>'+
                '<tr>'+ 
                    '<th style="width:1%" scope="col">#</th>'+ 
		'<th style="width:10%" scope="col">Member</th>'+
		'<th style="width:10%" scope="col">Title</th>'+
                    '<th style="width:5%" scope="col">View</th>'+	
                    '<th style="width:5%" scope="col">View</th>'+	
                    '<th style="width:5%" scope="col">Delete</th>'+	
                '</tr>'+
                '</thead>'+
                '<tbody>';	
            MsubmPack.forEach(function(item, index) {
			DVZ +='<tr>';
			/* DVZ += '<td>';
			DVZ += no++;
			DVZ += '</td>';  */
			DVZ += '<td>'+item.tastatusc+'</td>'; 
            var inpostitle = postclovkGl.filter(lutt => lutt.id == item.postid).map(lutt => lutt.title);
			DVZ +='<td>'+item.taname+'</td>'+
            '<td>'+inpostitle+'</td>'+
			'<td> <button type="button" class="btn btn-primary linkmod" id="view'+item.postid+'">Post</button> </td>'+
			'<td> <button type="button" class="btn btn-warning linkmod" id="vassg'+item.assgid+'">Task</button> </td>'+
			'<td> <button type="button" class="btn btn-danger linkmod" id="dele'+item.assgid+'">Delete</button> </td>'+
			'</tr>';
                    
                });
                DVZ += '</tbody>'+
                '</table>';
                $("#AccomplishedListIv").html(DVZ);
                $("#taskdonetable").DataTable();

                MsubmPack.forEach(function(item, index) { 
                    $('#taskdonetable').on('click', '#view'+item.postid+'', function(event) {
                        document.getElementById("AccomplishedListDiv").style.display = "none";
                        document.getElementById("PostListDiv").style.display = "block";
                       
                      var fbxg = item.postid;
                       postwithView(fbxg);
                      });
                    });
                    //AccomplishedIvVw
                MsubmPack.forEach(function(item, index) { 
                    $('#taskdonetable').on('click', '#vassg'+item.assgid+'', function(event) {
                        var fbxg = item.assgid;
                        var dmand = 0;
                        assgaccmplView(MsubmPack, fbxg, dmand);
                        });
                    });
        }
    });
}
function assgaccmplView(MsubmPack, fbxg, dmand) {
    var wjhc = MsubmPack.filter(knhc => knhc.assgid == fbxg); 
    var accmpostsub = wjhc.map(mkzj => mkzj.accmpostsub);
    var memberid = wjhc.map(mkzj => mkzj.memberid);
    var postid = wjhc.map(mkzj => mkzj.postid);
    var taname = wjhc.map(mkzj => mkzj.taname);
    var tastatusc = wjhc.map(mkzj => mkzj.tastatusc);
    var adate = wjhc.map(mkzj => mkzj.adate);
    var aremark = wjhc.map(mkzj => mkzj.aremark);
    var ascore = wjhc.map(mkzj => mkzj.ascore);
    
   var aremarkRope =   JSON.stringify(wjhc.map(mkzj => mkzj.aremark)).replace(/[\[\]"]+/g,"");

    var GCI = `<div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title text-center">Task Submitted by ${taname} (${tastatusc}) <br>On ${adate}</h4>
                <h4 id="asubtaskScS" class="text-success text-center"></h4>
            </div>
            <div class="card-body">
           <code> ${accmpostsub}</code>
            </div>
            </div>
        </div>
    </div>
    <div id="asubtaskFCl">
    <form name="asubtaskmal" id="asubtaskmal" action="" method="POST" onSubmit="return false;">
    <input type="hidden" id="sbloodc" value="${postid}">
    <input type="hidden" id="sbloomd" value="${memberid}">
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title">SCORE</h4>
                <p id="sbscoreUxc" class="helpblock"></p>
            </div>
            <div class="card-body">
            <span id="sbscoretxt"><textarea rows="4" cols="80" class="form-control summernote" name="sbscore" id="sbscore">${ascore}</textarea></span>
            </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title">REMARK</h4>
                <p id="sbremarkUxc" class="helpblock"></p>
            </div>
            <div class="card-body">
            <span id="sbremarktxt"><textarea rows="4" cols="80" class="form-control summernote" name="sbremark" id="sbremark">${aremark}</textarea></span>
            <br><br>
            <button id="asubtaskmalSubmit" class="btn btn-success pull-right linkmod">Submit</button>
            </div>
            </div>
        </div>
    </div>
    </form>
    </div>`;

    var DUI = `<div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title text-center">Task Submitted by ${taname} (${tastatusc}) <br>On ${adate}</h4>
                <h4 id="asubtaskScS" class="text-success text-center"></h4>
                <center>
                <button class="btn btn-warning linkmod" onClick="assgaccmplView(MsubmPack, ${fbxg}, 1)">Edit Score & Remark</button>
                </center>
            </div>
            <div class="card-body">
           <code> ${accmpostsub}</code>
            </div>
            </div>
        </div>
    </div>
    <div id="asubtaskFCl">
    
    <input type="hidden" id="sbloodc" value="${postid}">
    <input type="hidden" id="sbloomd" value="${memberid}">
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title">SCORE</h4>
                <p id="sbscoreUxc" class="helpblock"></p>
            </div>
            <div class="card-body">
            ${ascore}
            </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
        <div class="card ">
            <div class="card-header ">
                <h4 class="card-title">REMARK</h4>
                <p id="sbremarkUxc" class="helpblock"></p>
            </div>
            <div class="card-body">
            ${aremark}
            </div>
            </div>
        </div>
    </div>
 
    </div>`;
    if(aremarkRope.length > 0 && dmand == 0){
        $("#AccomplishedIvVw").html(DUI);
    }else{
        $("#AccomplishedIvVw").html(GCI);
        smscoresummernote();
        smremarksummernote();
        document.getElementById("asubtaskmalSubmit").addEventListener("click", function() {
            //console.log("Will yo shut the fuck pup")
            assgaccmplRemark();
        });
    }
    document.getElementById("Accomplishedrowone").style.display = "none";
   
}
function assgaccmplRemark() {
		
	var sbremark  = document.asubtaskmal.sbremark.value;	
	var sbscore  = document.asubtaskmal.sbscore.value; 
	var sbremarkUxc = sbscoreUxc = true; 
	
		// Validate sbremark
		if(myTrim(sbremark) == "") {
        printError("sbremarkUxc", "*Required.");
    } else {
        // Check if its lesser than 0
        if(myTrim(sbremark).length < 0) {
            printError("sbremarkUxc", "*Required.");
        } else{
            printError("sbremarkUxc", "");
            sbremarkUxc = false;
        }
    }
		// Validate sbscore
		if(myTrim(sbscore) == "") {
        printError("sbscoreUxc", "*Required.");
    } else {
        // Check if its lesser than 0
        if(myTrim(sbscore).length < 0) {
            printError("sbscoreUxc", "*Required.");
        } else{
            printError("sbscoreUxc", "");
            sbscoreUxc = false;
        }
    } 
		// Prevent the form from being submitted if there are any errors
	if ((sbremarkUxc || sbscoreUxc) == true) {
	   return false;
    } else {
        assgaccmplRemarkNit();
    }  
	}
    function assgaccmplRemarkNit(){
		
        var sbremark  = document.getElementById("sbremark").value;	
        var sbscore  = document.getElementById("sbscore").value;
        var sbloodc  = document.getElementById("sbloodc").value;
        var sbloomd  = document.getElementById("sbloomd").value;
        
        document.getElementById("asubtaskFCl").style.display = "none";

        
        
        $.ajax({
            type: "POST",
            url: "https://samuelproject.000webhostapp.com/serve/", 
            dataType: "json",
            data: {sbremark: sbremark, sbscore: sbscore, sbloodc: sbloodc, sbloomd: sbloomd, filemxee_boom: filemxee_boom, dexlemxx_moon: dexlemxx_moon},
            success: function(TasJardata){
                //$("#rufusLohn").html(data);
                
            var slf = TasJardata; 
            if(slf.TextMsg == "none"){
                document.getElementById("asubtaskScS").innerHTML = 'Successful';
                Peopleweysubmit();
            }else{
                document.getElementById("asubtaskFCl").style.display = "display";
                document.getElementById("asubtaskScS").innerHTML = 'Error!<br>Check Your Form or Refresh the page';
                
            }
            }
             
        });
    
    }
function stabilis() {
    document.getElementById("PostListIvT").style.display = "block";
    document.getElementById("PostListIv").style.display = "block";
    document.getElementById("PostListIvVw").innerHTML = "";
    document.getElementById("tokic").innerHTML = "";
    document.getElementById("AccomplishedIvVw").innerHTML = "";
    document.getElementById("Accomplishedrowone").style.display = "block";
    
    document.getElementById("taskPost").reset();	
    document.getElementById("posttxt").innerHTML = '<textarea id="post" name="post" class="form-control"></textarea>';
	postsummernote();
    document.getElementById("taskasktxt").innerHTML = '<textarea id="taskask" name="taskask" class="form-control"></textarea>';
	taskasksummernote();
    document.getElementById("ndescribetxt").innerHTML = '<textarea id="ndescribe" name="ndescribe" class="form-control"></textarea>';
	ndescribesummernote();
    document.getElementById("lfatme").value = "uaa";
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
