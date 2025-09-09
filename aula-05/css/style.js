import {StyleSheet} from 'react-native';

const mascara = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  paragraph:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  cx1:{
    width:200,
    height:200,
    borderWidth:2,
    borderColor:'#f00',
    alignSelf:'center',
    marginBottom:20,
  },

  cx2:{
    width:250,
    height:200,
    backgroundColor:'#ff0',
    marginLeft: 20,
    marginTop: 20,
  },

  titulo:{
    fontSize:20,
    fontStyle:'italic',
    fontWeight:'bold',
    textAlign:'right',
    color:'#0c0'
  }
});
export default mascara;