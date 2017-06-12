
QUnit.test( "function getPackageOrder does not return null", function( assert ) {
  assert.ok( getPackageOrder("") != null, "Passed!" );
});

QUnit.test( "function isDependent returns true if dependent, false if not", function( assert ) {
	item1 = "CamelCaser: ";
	item2 = "KittenService: CamelCaser";
  assert.ok( isDependent(item1, item2), "succeeds if dependent" );
  assert.ok( !isDependent(item2, item1), "succeeds if not dependent" );
});

QUnit.test( "function getPackageName returns the package name", function (assert) {
	assert.ok(getPackageName("CamelCaser: Shadenfreude") == "CamelCaser", "Passed!");
});

QUnit.test( "algorithm works with sample data", function (assert) {
	var excerciseInput = ["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "];
	var expectedResult = "Ice, Cyberportal, Leetmeme, Fraudstream, KittenService, CamelCaser"
	assert.ok(getPackageOrder(excerciseInput) == expectedResult, "Passed!");
});

QUnit.test( "algorithm detects cycles", function (assert) {
	var loopedInput = ["KittenService: ","Leetmeme: Cyberportal","Cyberportal: Ice","CamelCaser: KittenService","Fraudstream: ","Ice: Leetmeme"];
	var expectedResult = "Error: Input must not contain a cycle";
	assert.ok(getPackageOrder(loopedInput) == expectedResult, "Passed!");
});