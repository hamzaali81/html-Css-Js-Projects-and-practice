
// ReactDOM.render(React.createElement('h1',null,'Hello world'),document.getElementById('content'));
// ReactDOM.render(React.createElement('a',{href:'#',target:'_blank'},'Google'),document.getElementById('content'));


// h1= React.createElement('h1',null,'Hello world');
// p= React.createElement('p',null,'Road to way learn react');

// ReactDOM.render(React.createElement('div',null,h1,p),document.getElementById('content'));


/////////////////////////////////////////////////////
//First Component
// var h1=React.createElement('h1',null,'Hello world');
// var p=React.createElement('p',null,'Crazy React developer');
// class CustomComponent extends React.Component{
// render(){
//     return (
//     // React.createElement(`h1`,null,'Hello world')
//     // React.createElement(`p`,null,'Crazy React developer')
//     React.createElement('div',null,h1,p)
//     )
// }
// }

// var firstComponent= React.createElement(CustomComponent,null);
// ReactDOM.render(firstComponent,document.getElementById('content'));





class CustomLinks extends React.Component{
    render(){
        // console.log(this.props)
        return(
            //React.createElement('a',null,google)

        React.createElement('a',this.props,this.props.linktext)
        );
    }
}



var mylink=React.createElement('div',null,

React.createElement(CustomLinks,{href:'#',linktext: 'google',title:'Google link'}),
React.createElement(CustomLinks,{href:'#',linktext: 'twitter',title:'twitter link'}),
React.createElement(CustomLinks,{href:'#',linktext:'instagram',title:'instagram'})
)



//  var firstComponent= React.createElement(CustomLinks,null);
 ReactDOM.render(mylink,document.getElementById('content'));























