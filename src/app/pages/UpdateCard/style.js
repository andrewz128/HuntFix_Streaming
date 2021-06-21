import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  form: {
    ...Styles.matchParent,
    marginHorizontal:35,
    marginTop:40,
  },
  input:{
    marginBottom:8,
  },
  logo:{
  	width:200,
  	height:60,
  	resizeMode:'contain',
  	alignSelf:'center',
  	marginTop:50
  },
  label:{
    width:'100%',
    textAlign:'left',
    color:Colors.orange,
    marginBottom:5
  },
  row:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
  },
  code:{
    flex:1,
    marginRight:5
  },
  dropdown:{
    height:40,
    borderRadius:4,
    backgroundColor:'rgba(170,170,170,1.0)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:5
  },
  dropdownText:{
    color:Colors.gray,
    fontSize:Constants.FontSize.tiny
  },
  dropdownIcon:{
    width:8,
    height:15,
    resizeMode:'contain'
  },
  month:{
    width:80,
    marginRight:5
  },
  year:{
    width:70,
  },
  btnTerm:{
    alignSelf:'center',
  },
  btnTermText:{
    marginVertical:5,
    color:'rgba(170,170,170,1.0)',
    fontSize:12,
    textAlign:'center'
  },
  radioWrap:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    marginBottom:30
  },
  radioButton:{
    flexDirection:'row',
    alignItems:'flex-start'
  },
  radioText:{
    color:'white',
    fontSize:Constants.FontSize.tiny
  },
  radioSubText:{
    color:'white',
    fontSize:Constants.FontSize.superTiny
  },
  radioIcon:{
    marginRight:10,
    width:15,
    height:15,
    resizeMode:'contain'
  },
  btnCancel:{
    width:'100%',
    height:45,
    borderRadius:4,
    borderWidth:1,
    borderColor:Colors.orange,
    ...Styles.centerContent,
    marginTop:10
  },
  btnCancelText:{
    color:Colors.orange,
    fontSize:Constants.FontSize.large
  }
});
