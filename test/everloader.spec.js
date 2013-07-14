var rgx = /.*\.[0-9]*/;
describe( "everloader", function () {
	describe( "When no configuration has been applied", function() {
		describe( "When calling configure() with no arguments", function () {
			var cfg = everloader.configure();
			it( "should return the default configuration", function () {
				expect( cfg.apiKey ).to.be( "" );
				expect( cfg.mimeTypes ).to.eql( {
					jpg : "image/jpeg",
					jpeg : "image/jpeg",
					png : "image/png",
					gif : "image/gif"
				});
				expect( cfg.timeout ).to.be( 60000 );
				expect( cfg ).to.have.property( "getBase64ImageFromInput" );
				expect( cfg ).to.have.property( "getElUri" );
				expect( cfg ).to.have.property( "getFileInputs" );
				expect( cfg ).to.have.property( "getImageFileObject" );
			} );
		});
	});
} );