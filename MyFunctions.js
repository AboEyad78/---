//استخدمنا مكتبة الجي كويري لنتحكم بتافعل زر التشيك بوكس عبر الخاصية توغغل ووضعنا المعيار 1000 لجمالية الحركة

$(document).ready(  function(){

$(V1).click(function(){
    $(d1).toggle(1000);
})
$(V2).click(function(){
    $(d2).toggle(1000);
})
$(V3).click(function(){
    $(d3).toggle(1000);
})
$(V4).click(function(){
    $(d4).toggle(1000);
})
$(V5).click(function(){
    $(d5).toggle(1000);
})


//لجعل فورم ادخال المعلومات الشخصية يظهر عند الضغط على المتابعة والقدرة على اخفائه ثانية
document.getElementById("bot1").addEventListener("click", function () {
    const form = document.getElementById("cust-Form");
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
    } else {
        form.classList.add("hidden");
    }
});




//هذه التعليمات المسؤلة عن اظهار مربع نصي فيه رسالة للمستخدم في حال ضغط على زر الإرسال ان يظهر له تمام عملية الشراء وماهو رقم الكتاب ال1ي اشتراه 
document.getElementById('cust-Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const selectedBook = document.querySelector('input[name="S"]:checked');

    if (selectedBook) {

        const message = document.getElementById('message');
        const mBox = document.getElementById('mBox');

        message.textContent = `الكتاب: "${selectedBook.value}" تمت عملية حجزه وشرائه بنجاح`;
        mBox.classList.remove('hidden');
    } else {
        alert('يجب اختيار كتاب ما أولا !!!!');
    }
});




 });
 
 









                           