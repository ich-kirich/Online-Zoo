var elem = document.querySelector('input[type="range"]')
var com = document.querySelectorAll('.comment')
var massComments = [];
var massNames = ['Alex', 'Brutto', 'Fin', 'Abobus', 'Kirill', 'Floppa', 'Stepandus', 'Steve'];
var prev = 0;
var allComments = createComments()
const pageWidth = document.documentElement.scrollWidth
if(pageWidth <= 1200){
    let review = document.querySelector('.review')
    review.lastElementChild.remove();
    elem.setAttribute('max', '9')
}

function changeComments(){
    if(pageWidth > 840 && pageWidth <= 1200){
        var newValue = elem.value
        let review = document.querySelector('.review')
        ind1 = Number(prev) + 1
        ind2 = Number(prev) + 2
        setTimeout(() => { 
            allComments[Number(prev)].classList.add('animate');
            allComments[ind1].classList.add('animate');
            allComments[ind2].classList.add('animate');
            let del = document.querySelectorAll('.animate')
            for(let i = 0; i < del.length; i++){
                del[i].classList.remove('animate')
                del[i].remove();
            }
            for(let i = 0; i < 3; i++){
                review.appendChild(allComments[Number(newValue) + i]);
            }
            prev = newValue
        }, 100);
    }
    else{
        var newValue = elem.value
        let review = document.querySelector('.review')
        ind1 = Number(prev) + 1
        ind2 = Number(prev) + 2
        ind3 = Number(prev) + 3
        setTimeout(() => { 
            allComments[Number(prev)].classList.add('animate');
            allComments[ind1].classList.add('animate');
            allComments[ind2].classList.add('animate');
            allComments[ind3].classList.add('animate');
            let del = document.querySelectorAll('.animate')
            for(let i = 0; i < del.length; i++){
                del[i].classList.remove('animate')
                del[i].remove();
            }
            for(let i = 0; i < 4; i++){
                review.appendChild(allComments[Number(newValue) + i]);
            }
            prev = newValue
        }, 100);
    }
}

function createComments(){
    for (let i = 0; i < 8; i++) {
        let comment = document.createElement("div");
        let person = document.createElement("div");
        let text = document.createElement("div");
        let avatar = document.createElement("div");
        let caption = document.createElement("div");
        let name = document.createElement("p");
        let signature = document.createElement("p");
        let p = document.createElement("p");
        person.classList.toggle('person')
        text.classList.toggle('text')
        avatar.classList.toggle('avatar')
        avatar.classList.toggle('first')
        caption.classList.toggle('caption')
        name.classList.toggle('name')
        signature.classList.toggle('signature')
        signature.append("Local Austria • Today")
        name.append(massNames[i])
        p.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat sem id quam rutrum convallis. Vestibulum molestie neque id elit suscipit rhoncus. Nullam cursus nisl sit amet justo lobortis, nec elementum justo fermentum. Pellentesque accumsan a ante ut molestie. Praesent cursus in mauris vehicula iaculis. Quisque placerat diam quis malesuada ultricies. Vestibulum at varius nibh, id efficitur eros. Nulla ac mauris at magna tempus posuere id ut ipsum. Nulla dictum, turpis ut lacinia varius, ligula tellus blandit odio, eu dictum ante sapien non nibh. Quisque non nibh arcu. Phasellus pellentesque felis massa, id euismod mauris consectetur sit amet. Suspendisse rhoncus ex ut lectus lacinia aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque neque dolor, ullamcorper quis bibendum blandit, consequat eu dui.")
        text.append(p)
        caption.append(name)
        caption.append(signature)
        person.append(avatar)
        person.append(caption)
        comment.append(person)
        comment.append(text)
        comment.classList.toggle('comment')
        massComments.push(comment)
    }
    let allComments = Array.from(com).concat(massComments);
    return allComments
};