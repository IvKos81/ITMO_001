/*аккордеон*/

let accordeonUnit = document.querySelectorAll('.accordeon__unit');
let chevron = document.querySelectorAll('.chevron');
let accordeonUnitFooter = document.querySelectorAll('.accordeon__unit__footer');
for (let i=0; i<accordeonUnit.length; i++) {
  accordeonUnit[i].addEventListener('click', function() {
    for (let j=0; j<accordeonUnit.length; j++) {
      if (!accordeonUnitFooter[j].classList.contains('hidden')) {
        accordeonUnitFooter[j].classList.add('hidden')
        chevron[j].classList.toggle('rotation');
      }
    }
    accordeonUnitFooter[i].classList.toggle('hidden');
    chevron[i].classList.toggle('rotation');
  })
}