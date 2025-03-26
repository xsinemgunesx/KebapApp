import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#1976d2',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    aliginItems: 'center',
    justifyContent: 'center',
    width: 270, //burda verdiğimiz width değeri ile ana welcome componentinde button'u ortaya alarak küçültmemiz burda vermiş olduğumuz değer sayesinde button'un boyutunu korumuş oluyoruz nerede çağırırsak width belirrtiğimiz değer oluyor
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
