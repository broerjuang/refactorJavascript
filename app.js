'use strict'

const model = {
  diceNumber : (k, die) => {
    let value = Math.floor((Math.random() * 6) + 1)
    $(die).text(value)
  }
}

const view = {
  newDice : () => {
    $('.dice').append('<div class="die">0</div>')
  }
}

const controller = {
  rollingDice : () => {
    $('.die').each(model.diceNumber)
  }
}

$(document).ready(() => {
    $('#roller button.add').on('click', view.newDice)
    $('#roller button.roll').on('click', controller.rollingDice)
})
