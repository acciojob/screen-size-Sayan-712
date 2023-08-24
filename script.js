//your JS code here. If required.
function UpdateWindowSize()
	{
	const widthspan=document.getElementById('width');
	const heightspan=document.getElementById('height');
		widthspan.textContent=window.innerWidth;
		heightspan.textContent=window.innerHeight;
}
UpdateWindowSize();
window.addEventListener('resize',UpdateWindowSize);