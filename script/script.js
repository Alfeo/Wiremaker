$(document).ready(function()
{
	var i = 0;
	
	$("#but1").click(function()
	{
		i = i + 1;
		var haut = prompt("Entrez la hauteur de votre bloc :");
		var larg = prompt("Entrez la largeur de votre bloc :");
		var color = prompt("Donnez lui une couleur ! :");
		$("#sandbox").append("<div class=\"item\" id=\"bloc"+i+"\" style=\"height:"+haut+"px;width:"+larg+"px;background-color:"+color+";\"><strong>bloc"+i+"</strong></div>");
	});
	
	$("#but2").click(function()
	{
		i = i + 1;
		var imghaut = prompt("Entrez la hauteur de votre image :");
		var imglarg = prompt("Entrez la largeur de votre image :");
		var imgurl = prompt("Entrez l'url de votre image :");
		$("#sandbox").append("<div class=\"item\" id=\"bloc"+i+"\" style=\"height:"+imghaut+"px;width:"+imglarg+"px;\"><img class=\"import\" src=\""+imgurl+"\"><strong>bloc"+i+"</strong></div>");
	});
	
	$("#but4").click(function()
	{
		var set = prompt("Entrez le numéro du bloc à modifier :");
		var bord = prompt("Définissez les valeurs de la bordure :");
		$("#bloc"+set).css("border", bord);
	});

	$("#but5").click(function()
	{
		var setrad = prompt("Entrez le numéro du bloc à modifier :");
		var rad = prompt("Définissez le radius à adopter :");
		$("#bloc"+setrad).css("border-radius", rad + "px");
	});
	
	$("#but6").click(function()
	{
		var modblock = prompt("Entrez le numéro du bloc à modifier :");
		var modhaut = prompt("Entrez la hauteur de votre bloc :");
		var modlarg = prompt("Entrez la largeur de votre bloc :");
		var modcolor = prompt("Donnez lui une couleur ! :");
		$("#bloc"+modblock).css("height", modhaut + "px");
		$("#bloc"+modblock).css("width", modlarg + "px");
		$("#bloc"+modblock).css("background-color", modcolor);
	});

	$("#but7").click(function()
	{
		var del = prompt("Entre le numéro du bloc à supprimer :");
		$("#bloc"+del).remove();
	});

	function traitement(evenement)
	{
		if(evenement.which == 37)
		{
			$("#bloc"+i).animate({marginLeft:"-=50px"});
		}
		else if(evenement.which == 38)
		{
			$("#bloc"+i).animate({marginTop:"-=50px"});
		}
		else if(evenement.which == 39)
		{
			$("#bloc"+i).animate({marginLeft:"+=50px"});
		}
		else if(evenement.which == 40)
		{
			$("#bloc"+i).animate({marginTop:"+=50px"});
		}
	}
	 
	$(function()
	{
		$(document).keydown(traitement);
	});
});
