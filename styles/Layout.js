import { StyleSheet } from 'react-native';

const Layout = StyleSheet.create({
	paddingAll: {
		padding: 25
	},
	paddingV: {
		paddingVertical: 25
	},
	paddingH: {
		paddingHorizontal: 25
	},
	columnLeft: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	columnCenter: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	columnRight: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
	},
	rowLeft: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
	},
	rowCenter: {
		flexDirection: 'row',
		justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%'
	},
	rowJustify: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%'
	},
	rowRight: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
	},
	rowFlow: {
		flexWrap: 'wrap', 
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',    
	},
	rowFlowCenter: {
		flexWrap: 'wrap', 
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',    
	},
	rowFlowRight: {
		flexWrap: 'wrap', 
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',    
	},
	rowFlowJustify: {
		flexWrap: 'wrap', 
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',    
	},
	rowMap: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
	},
	centerContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default Layout;