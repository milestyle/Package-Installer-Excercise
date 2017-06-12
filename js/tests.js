
QUnit.test( "functoin getPackageOrder returns not null", function( assert ) {
  assert.ok( getPackageOrder("") != null, "Passed!" );
});

QUnit.test( "function isDependent returns true if dependent", function( assert ) {
	item1 = "CamelCaser: ";
	item2 = "KittenService: CamelCaser";
  assert.ok( isDependent(item1, item2), "Passed!" );
  assert.ok( !isDependent(item2, item1), "Passed!" );
});