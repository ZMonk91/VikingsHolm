module.exports = {


  friendlyName: 'View main page',


  description: 'Display "Main" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/main-page'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
