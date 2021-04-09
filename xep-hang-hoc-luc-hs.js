let a= +prompt('Diem bai kiem tra 1 tiet')
let b= +prompt('Diem bai kiem tra giua ky')
let c= +prompt('Diem bai kiem tra cuoi ky')

DTB= (a+b+2*c)/4;
if (DTB <3.5){
    alert('Hoc luc kem')
}else if (DTB<=6){
    alert('Hoc luc trung binh')
}else if (DTB<=8){
    alert('Hoc luc kha')
}else {
    alert('Hoc luc gioi')
}