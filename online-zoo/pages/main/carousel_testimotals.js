var elem = document.querySelector('input[type="range"]')
const review = document.querySelector('.review')
const com = document.querySelectorAll('.comment')
var massComments = [];
var massNames = ['Alex', 'Brutto', 'Fin', 'Abobus', 'Kirill', 'Floppa', 'Stepandus', 'Steve', 'Lama'];
var prev = 0;
createComments()
const pageWidth = document.documentElement.scrollWidth

if(pageWidth > 840 && pageWidth <= 1200){
    var rangeValue = function(){
        var newValue = elem.value
        console.log(newValue)
        console.log( massComments[newValue])
        if(newValue < prev){
            if(newValue < 3){
                review.lastElementChild.classList.toggle('animate');
                setTimeout(() => { review.lastElementChild.remove(); }, 400);
                com[newValue].classList.toggle('animate');
                setTimeout(() => { com[newValue].style.display = 'block'; }, 300);
            }
            else{
                review.lastElementChild.classList.toggle('animate');
                setTimeout(() => { review.lastElementChild.remove(); }, 300);
                massComments[newValue - 3].classList.remove('animate');
                setTimeout(() => { com[3].after(massComments[newValue - 3]); }, 400);
            }
        }
        else{
            if(newValue <= 3){
                com[newValue - 1].classList.toggle('animate');
                setTimeout(() => { com[newValue - 1].style.display = 'none' }, 300);
                massComments[newValue - 1].classList.remove('animate');
                setTimeout(() => { review.appendChild(massComments[newValue - 1]); }, 400);
            }
            else{
                massComments[newValue - 4].classList.add('animate');
                setTimeout(() => { review.removeChild(massComments[newValue - 4]); }, 300);
                massComments[newValue - 1].classList.remove('animate');
                setTimeout(() => { review.appendChild(massComments[newValue - 1]); }, 400);
            }
        }
        prev = newValue
    };
}
else{
    var rangeValue = function(){
        var newValue = elem.value
        if(newValue < prev){
            if(newValue < 4){
                review.lastElementChild.classList.toggle('animate');
                setTimeout(() => { review.lastElementChild.remove(); }, 400);
                com[newValue].classList.toggle('animate');
                setTimeout(() => { com[newValue].style.display = 'block'; }, 400);
            }
            else{
                review.lastElementChild.classList.toggle('animate');
                setTimeout(() => { review.lastElementChild.remove(); }, 300);
                massComments[newValue - 4].classList.remove('animate');
                setTimeout(() => { com[3].after(massComments[newValue - 4]); }, 400);
            }
        }
        else{
            if(newValue <= 4){
                com[newValue - 1].classList.toggle('animate');
                setTimeout(() => { com[newValue - 1].style.display = 'none' }, 300);
                massComments[newValue - 1].classList.remove('animate');
                setTimeout(() => { review.appendChild(massComments[newValue - 1]); }, 400);
            }
            else{
                massComments[newValue - 5].classList.add('animate');
                setTimeout(() => { review.removeChild(massComments[newValue - 5]); }, 300);
                massComments[newValue - 1].classList.remove('animate');
                setTimeout(() => { review.appendChild(massComments[newValue - 1]); }, 400);
            }
        }
        prev = newValue
    };
}

function createComments(){
    for (let i = 0; i < 9; i++) {
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
};

elem.addEventListener("input", rangeValue)