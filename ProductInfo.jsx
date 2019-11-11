
var StoreInfo =
{
    fan : "",
    team :
    {
        designsFolder : "P:\\Team Stores\\Designs\\PNGs\\"
    },
    leusink : "",
    dayton : ""
}

//Product Information
var ProductInfo =
{
	all :
    {
        neutralColors : ["white","black","charcoal","onix","grey"],
        overrides:
        {
            light : ["white","grey"],
            dark : ["black","charcoal","onix"]
        }
    },
    pmensapparelbutton :
     {
         name : "pmensapparelbutton",
         stores: ["team"],
         process: "button",
         allColors: ["black","dark green","gold","grey","maroon","navy","orange","red","royal","white"],
         fallback: ["grey"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["team"],
		designLocationInformation :
		{
                "all" :
                {
				name : "all",
				designCenter : 0.790741,
				designHeight : 0.529167,
				designMaxWidth : 0.085185,
				designMaxHeight : 0.085185,
                  rule: "square"
                }
         }
     },
 	pwomensapparelbutton :
     {
         name : "pwomensapparelbutton",
         stores: ["team"],
         process: "button",
         allColors: ["black","dark green","gold","grey","maroon","navy","orange","purple","red","royal","white"],
         fallback: ["grey"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["team"],
		designLocationInformation :
		{
                "all" :
                {
				name : "all",
				designCenter : 0.737037,
				designHeight : 0.425,
				designMaxWidth : 0.096296,
				designMaxHeight : 0.096296,
                  rule: "square"
                }
         }
     },
    paccessoriesbutton :
     {
         name : "paccessoriesbutton",
         stores: ["team"],
         process: "button",
         allColors: ["white"],
         fallback: ["white"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["d1"],
		designLocationInformation :
		{
                "all" :
                {
				name : "all",
				designCenter : 0.601852,
				designHeight : 0.566667,
				designMaxWidth : 0.7,
				designMaxHeight : 0.418519,
                  rule : "height"
                }
         }
     },
     pheadwearbutton :
     {
         name : "pheadwearbutton",
         stores: ["team"],
         process: "button",
         allColors: ["white"],
         fallback: ["white"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["headwear"],
		designLocationInformation :
		{
                "all" :
                {
				name : "all",
				designCenter : 0.742593,
				designHeight : 0.5875,
				designMaxWidth : 0.285185,
				designMaxHeight : 0.174074,
                   rule : "height",
                   align : "bottom"
                }
         }
     },
     pfootwearbutton :
     {
         name : "pfootwearbutton",
         stores: ["team"],
         process: "button",
         allColors: ["white"],
         fallback: ["white"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["none"],
		designLocationInformation :
		{
            "all" :
            {
                name : "all",
                designCenter : 0.2,
                designHeight : 0.2,
                designMaxWidth : 0.2,
                designMaxHeight : 0.2
            }
         }
     },
     pequipmentbutton :
     {
         name : "pequipmentbutton",
         stores: ["team"],
         process: "button",
         allColors: ["white","royal","black","red","grey"],
         fallback: ["grey"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["d9","d13"],
		designLocationInformation :
		{
            "all" :
            {
                name : "bag-side",
                designCenter : 0.896296,
                designHeight : 0.45,
                designMaxWidth : 0.35,
                designMaxHeight : 0.1375,
                rotate: 90
            },
            "bag-ball" :
            {
                name : "bag-ball",
                designCenter : 0.372222,
                designHeight : 0.195833,
                designMaxWidth : 0.107407,
                designMaxHeight : 0.120833
            }
         }
     },
 	pmensapparelmobilebutton :
     {
         name : "pmensapparelmobilebutton",
         stores: ["team"],
         process: "button",
         allColors: ["black","dark green","gold","grey","maroon","navy","orange","red","royal","white"],
         fallback: ["grey"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["team"],
		designLocationInformation :
		{
                "all" :
                {
				name : "all",
				designCenter : 0.872995,
				designHeight : 0.432927,
				designMaxWidth : 0.07754,
				designMaxHeight : 0.170732,
                  rule: "square"
                }
         }
     },
 	pwomensapparelmobilebutton :
     {
         name : "pwomensapparelmobilebutton",
         stores: ["team"],
         process: "button",
         allColors: ["black","dark green","gold","grey","maroon","navy","orange","purple","red","royal","white"],
         fallback: ["grey"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["team"],
		designLocationInformation :
		{
                "all" :
                {
				name : "all",
				designCenter : 0.856952,
				designHeight : 0.347561,
				designMaxWidth : 0.086,
				designMaxHeight : 0.195122,
                  rule: "square"
                }
         }
     },
    paccessoriesmobilebutton :
     {
         name : "paccessoriesmobilebutton",
         stores: ["team"],
         process: "button",
         allColors: ["white"],
         fallback: ["white"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["d1"],
		designLocationInformation :
		{
                "all" :
                {
				name : "all",
				designCenter : 0.768717,
				designHeight : 0.780488,
				designMaxWidth : 0.430481,
				designMaxHeight : 0.723902,
                  rule : "height"
                }
         }
     },
     pheadwearmobilebutton :
     {
         name : "pheadwearmobilebutton",
         stores: ["team"],
         process: "button",
         allColors: ["white"],
         fallback: ["white"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["headwear"],
		designLocationInformation :
		{
                "all" :
                {
				name : "all",
				designCenter : 0.819519,
				designHeight : 0.820488,
				designMaxWidth : 0.264706,
				designMaxHeight : 0.341463,
				//designMaxHeight : 0.253659,
                  align : "bottom",
                  rule : "height"
                }
         }
     },
     pfootwearmobilebutton :
     {
         name : "pfootwearmobilebutton",
         stores: ["team"],
         process: "button",
         allColors: ["white"],
         fallback: ["white"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["none"],
		designLocationInformation :
		{
            "all" :
            {
                name : "all",
                designCenter : 0.1,
                designHeight : 0.5,
                designMaxWidth : 0.1,
                designMaxHeight : 0.1
            }
         }
     },
     pequipmentmobilebutton :
     {
         name : "pequipmentmobilebutton",
         stores: ["team"],
         process: "button",
         allColors: ["white"],
         fallback: ["white"],
         overrides:
         {
             light : [""],
             dark : [""]
         },
         designs : ["d1"],
		designLocationInformation :
		{
            "all" :
            {
                name : "all",
                designCenter : 0.741979,
                designHeight : .536585,
                designMaxWidth : 0.200535,
                designMaxHeight : 0.45122,
                rule : "hypotenuse"
            }
         }
     },
    p10647 :
	{
		name : "p10647",
		stores: [],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["white","black","grey","red","navy","royal","dark green"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.518152,
				designHeight : 0.783333,
				designMaxWidth : 0.064686,
				designMaxHeight : 0.064686
			},
			"red" :
			{
				name : "red",
				designCenter : 0.362376,
				designHeight : 0.768939,
				designMaxWidth : 0.061386,
				designMaxHeight : 0.362376
			},
			"navy" :
			{
				name : "navy",
				designCenter : 0.528053,
				designHeight : 0.774242,
				designMaxWidth : 0.064686,
				designMaxHeight : 0.064686
			},
			"royal" :
			{
				name : "royal",
				designCenter : 0.528053,
				designHeight : 0.774242,
				designMaxWidth : 0.064686,
				designMaxHeight : 0.064686
			},
			"dark green" :
			{
				name : "dark green",
				designCenter : 0.528053,
				designHeight : 0.774242,
				designMaxWidth : 0.064686,
				designMaxHeight : 0.064686
			}
		}
	},
	p10648 :
	{
		name : "p10648",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["navy","black","grey","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.39967,
				designHeight : 0.756818,
				designMaxWidth : 0.061386,
				designMaxHeight : 0.061386,
                  rule: "square"
			},
			"black" :
			{
				name : "black",
				designCenter : 0.392376,
				designHeight : 0.768939,
				designMaxWidth : 0.061386,
				designMaxHeight : 0.061386,
                  rule: "square"
			},
            "grey" :
			{
				name : "grey",
				designCenter : 0.3967,
				designHeight : 0.763636,
				designMaxWidth : 0.056766,
				designMaxHeight : 0.055446,
                  rule: "square"
			},
            "white" :
			{
				name : "white",
				designCenter : 0.369637,
				designHeight : 0.764394,
				designMaxWidth : 0.056766,
				designMaxHeight : 0.055446,
                  rule: "square"
			}
		}
	},
	p10649 :
	{
		name : "p10649",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","dark green","royal","navy","black","charcoal","purple"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.405281,
				designHeight : 0.777273,
				designMaxWidth : 0.069967,
				designMaxHeight : 0.080303,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10650 :
	{
		name : "p10650",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","royal","navy","black","grey","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.374917,
				designHeight : 0.805212, // too low designHeight : 0.800212,
				designMaxWidth : 0.06727,
				designMaxHeight : 0.077273,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10653 :
	{
		name : "p10653",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["royal","navy","black","grey"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.368977,
				designHeight : 0.810606,
				designMaxWidth : 0.069967,
				designMaxHeight : 0.080303,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10654 :
	{
		name : "p10654",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["navy","black","grey","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.586139,
				designHeight : 0.795455,
				designMaxWidth : 0.066007,
				designMaxHeight : 0.075758,
                  rule: "square",
                  align: "center"
			},
			"white" :
			{
				name : "white",
				designCenter : 0.594059,
				designHeight : 0.795455,
				designMaxWidth : 0.066007,
				designMaxHeight : 0.075758,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10655 :
	{
		name : "p10655",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","dark green","royal","navy","purple","white","grey","black","orange"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.366238,
				designHeight : 0.797727,
				designMaxWidth : 0.071327,
				designMaxHeight : 0.078,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10656:
	{
		name : "p10656",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","maroon","athletic gold","dark green","royal","navy","black","grey","white"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.356766,
				designHeight : 0.804545,
				designMaxWidth : 0.071947,
				designMaxHeight : 0.080303,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10656:
	{
		name : "p10656",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: ["royal"],
			dark: [""]
		},
		allColors: ["black","white","dark green","gold","grey","maroon","navy","orange","red","royal"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.353465,
				designHeight : 0.810606,
				designMaxWidth : 0.071947,
				designMaxHeight : 0.082576,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10657:
	{
		name : "p10657",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: ["royal"],
			dark: [""]
		},
		allColors: ["royal","navy","black","grey"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.562706,
				designHeight : 0.798485,
				designMaxWidth : 0.078548,
				designMaxHeight : 0.090152,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10658:
	{
		name : "p10658",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","royal","navy","black","grey"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.435974,
				designHeight : 0.776515,
				designMaxWidth : 0.078548,
				designMaxHeight : 0.090152,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10659:
	{
		name : "p10659",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","navy","black","grey"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.565677,
				designHeight : 0.827273,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10660:
	{
		name : "p10660",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["royal","navy","black","grey","red"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.565017,
				designHeight : 0.793939,
				designMaxWidth : 0.072607,
				designMaxHeight : 0.083333,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10661:
	{
		name : "p10661",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["black"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.390099,
				designHeight : 0.783333,
				designMaxWidth : 0.058086,
				designMaxHeight : 0.058086,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p10666:
	{
		name : "p10666",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["kelly green","navy","red","royal","maroon","black","white","grey"],
		designs: ["headwear","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.391484,
				designHeight : 0.630915,
				designMaxWidth : 0.409341,
				designMaxHeight : 0.240139,
                  rule : "height",
                  align: "bottom"
			}
		}
	},
	p10683:
	{
		name : "p10683",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","royal","black","grey","white"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.40396,
				designHeight : 0.818939,
				designMaxWidth : 0.063366,
				designMaxHeight : 0.072727,
                  rule: "square",
                  align: "center"
			},
            "grey" :
			{
				name : "grey",
				designCenter : 0.369637,
				designHeight : 0.812121,
				designMaxWidth : 0.062046,
				designMaxHeight : 0.071212,
                  rule: "square",
                  align: "center"
			},
            "royal" :
			{
				name : "royal",
				designCenter : 0.39396,
				designHeight : 0.818939,
				designMaxWidth : 0.063366,
				designMaxHeight : 0.072727,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p11691: //Divot Tool
	{
		name : "p11691",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.261056,
				designHeight : 0.785606,
				designMaxWidth : 0.145875,
				designMaxHeight : 0.167424,
                  align : "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12759:
	{
		name : "p12759",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","dark green","royal","navy","black","grey"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.556766,
				designHeight : 0.757576,
				designMaxWidth : 0.064026,
				designMaxHeight : 0.073485,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12770:
	{
		name : "p12770",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","dark green","royal","navy","purple","black","grey"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.559406,
				designHeight : 0.786364,
				designMaxWidth : 0.062706,
				designMaxHeight : 0.07197,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12776:
	{
		name : "p12776",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","royal","black","white","navy"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.549505,
				designHeight : 0.8,
				designMaxWidth : 0.062706,
				designMaxHeight : 0.07197,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12780:
	{
		name : "p12780",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["black"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.607921,
				designHeight : 0.846212,
				designMaxWidth : 0.079208,
				designMaxHeight : 0.090909,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12782:
	{
		name : "p12782",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","royal","navy","black","grey"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.542244,
				designHeight : 0.805303,
				designMaxWidth : 0.062706,
				designMaxHeight : 0.07197,
                  rule: "square",
                  align: "center"
			}	,
			/*"black" :
			{
				name : "black",
				designCenter : 0.522442,
				designHeight : 0.770455,
				designMaxWidth : 0.062706,
				designMaxHeight : 0.07197,
                  rule: "square",
                  align: "center"
			},*/
			"purple" :
			{
				name : "purple",
				designCenter : 0.537624,
				designHeight : 0.744697,
				designMaxWidth : 0.062706,
				designMaxHeight : 0.07197,
                  rule: "square",
                  align: "center"
			},
            "royal" :
			{
				name : "royal",
				designCenter : 0.542244,
				designHeight : 0.805303,
				designMaxWidth : 0.062706,
				designMaxHeight : 0.07197,
                  rule: "square",
                  align: "center"
			},
		}
	},
	p12786:
	{
		name : "p12786",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["navy","black","grey","white"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"grey" :
			{
				name : "grey",
				designCenter : 0.609901,
				designHeight : 0.802273,
				designMaxWidth : 0.069967,
				designMaxHeight : 0.080303,
                  rule: "square",
                  align: "center"
			},
			"black" :
			{
				name : "black",
				designCenter : 0.609901,
				designHeight : .805303,
				designMaxWidth : 0.069967,
				designMaxHeight : 0.080303,
                  rule: "square",
                  align: "center"
			},
			"navy" :
			{
				name : "navy",
				designCenter : 0.593399,
				designHeight : 0.790152,
				designMaxWidth : 0.068647,
				designMaxHeight : 0.078788,
                  rule: "square",
                  align: "center"
			},
			"white" :
			{
				name : "white",
				designCenter : 0.60132,
				designHeight : 0.793182,
				designMaxWidth : 0.068647,
				designMaxHeight : 0.078788,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12787:
	{
		name : "p12787",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["all"]
		},
		allColors: ["red","royal","navy","black","grey","white"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.540554,
				designHeight : 0.822727,
				designMaxWidth : 0.067007,
				designMaxHeight : 0.075758,
                  rule: "square",
                  align: "center"
			},
            "white" :
			{
				name : "white",
				designCenter : 0.550554, //slightly to the left designCenter : 0.545554,
				designHeight : 0.816667,
				designMaxWidth : 0.067007,
				designMaxHeight : 0.075758,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12788:
	{
		name : "p12788",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","royal","navy","black","grey","white"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.538, //too far to the left designCenter : 0.531,
				designHeight : 0.820667, //too fhigh designHeight : 0.816667
				designMaxWidth : 0.066007,
				designMaxHeight : 0.075758,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12804:
	{
		name : "p12804",
		stores: ["dayton"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["columbia","red","grey","graphite","royal"],
		designs:
         {
            "team" : ["team","mascot"]
		},
        designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.538,
				designHeight : 0.820667,
				designMaxWidth : 0.066007,
				designMaxHeight : 0.075758,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12837:
	{
		name : "p12837",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["black","grey"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.535974,
				designHeight : 0.74697,
				designMaxWidth : 0.063366,
				designMaxHeight : 0.072727,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12843:
	{
		name : "p12843",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.462376,
				designHeight : 0.290152,
				designMaxWidth : 0.070627,
				designMaxHeight : 0.079545,
                  align: "center",
                  rule : "hypotenuse"
			}
		}
	},
	p12907:
	{
		name : "p12907",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.49868,
				designHeight : 0.275758,
				designMaxWidth : 0.058746,
				designMaxHeight : 0.065909,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12846:
	{
		name : "p12846",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.462376,
				designHeight : 0.290152,
				designMaxWidth : 0.070627,
				designMaxHeight : 0.079545,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12848:
	{
		name : "p12848",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.49868,
				designHeight : 0.275758,
				designMaxWidth : 0.058746,
				designMaxHeight : 0.065909,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12851: //Z-Star XV
	{
		name : "p12851",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.589286,
				designHeight : 0.435331,
				designMaxWidth : 0.228022,
				designMaxHeight : 0.26183,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12854: //Z-Star
	{
		name : "p12854",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.589286,
				designHeight : 0.435331,
				designMaxWidth : 0.228022,
				designMaxHeight : 0.26183,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12855: //Q-Star Tour
	{
		name : "p12855",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.589286,
				designHeight : 0.435331,
				designMaxWidth : 0.228022,
				designMaxHeight : 0.26183,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12856: //Soft Feel
	{
		name : "p12856",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.589286,
				designHeight : 0.435331,
				designMaxWidth : 0.228022,
				designMaxHeight : 0.26183,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12857: //TP5x
	{
		name : "p12857",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.589286,
				designHeight : 0.435331,
				designMaxWidth : 0.228022,
				designMaxHeight : 0.26183,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12858: //TP5
	{
		name : "p12858",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.589286,
				designHeight : 0.435331,
				designMaxWidth : 0.228022,
				designMaxHeight : 0.26183,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12866:
	{
		name : "p12866",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: ["all"],
			dark: [""]
		},
		allColors: ["red","dark green","royal","navy","purple","black","orange"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.518152,
				designHeight : 0.831061,
				designMaxWidth : 0.069967,
				designMaxHeight : 0.080303,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6215:
	{
		name : "p6215",
		stores: ["team"],
		process: "ht",
		allColors: ["royal","black","grey","navy"],
		designs: ["d9","d11"],
		designLocationInformation:
		{
            "all" :
            {
                name : "bag-side",
                designCenter : 0.7945,
                designHeight : 1 - 0.316,
                designMaxWidth : 0.398,
                designMaxHeight : 0.119,
                rotate: 90
            },
            "bag-ball" :
            {
                name : "bag-ball",
                designCenter : 0.2111,
                designHeight : 1 - 0.641,
                designMaxWidth : 0.139,
                designMaxHeight : 0.139
            }
		}
	},
	p12775:
	{
		name : "p12775",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["black","navy","red","royal","white"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.533333,
				designHeight : 0.816667,
				designMaxWidth : 0.077888,
				designMaxHeight : 0.091667,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12789:
	{
		name : "p12789",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: ["all"],
			dark: [""]
		},
		allColors: ["navy","black","royal","white","red","grey","dark green"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.36475,
				designHeight : 0.820321,
				designMaxWidth : 0.0685,
				designMaxHeight : 0.080367,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12839:
	{
		name : "p12839",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","black","dark green","grey","maroon","navy","purple","royal"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.437294,
				designHeight : 0.774242,
				designMaxWidth : 0.067987,
				designMaxHeight : 0.076515,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12882:
	{
		name : "p12882",
		stores: ["team"],
		process: "ht",
		allColors: ["dark green","red","black","grey","white"],
		designs: ["d9","d11"],
		designLocationInformation:
		{
            "all" :
            {
                name : "bag-side",
                designCenter : 0.813,
                designHeight : 0.585,
                designMaxWidth : 0.339,
                designMaxHeight : 0.107,
                rotate: 80.8
            },
            "bag-ball" :
            {
                name : "bag-ball",
                designCenter : 0.2425,
                designHeight : 0.364635,
                designMaxWidth : 0.107,
                designMaxHeight : 0.106893
            }
		}
	},
	p12899:
	{
		name : "p12899",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.538,
				designHeight : 0.352,
				designMaxWidth : 0.074,
				designMaxHeight : 0.074,
                  align: "center"
			}
		}
	},
	p12897:
	{
		name : "p12897",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.538,
				designHeight : 0.352,
				designMaxWidth : 0.074,
				designMaxHeight : 0.074,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12898:
	{
		name : "p12898",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.538,
				designHeight : 0.352,
				designMaxWidth : 0.074,
				designMaxHeight : 0.074,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12906:
	{
		name : "p12906",
		stores: ["team"],
		process: "ht",
		allColors: ["white"],
		designs: ["d1"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.5,
				designHeight : 0.975,
				designMaxWidth : 0.95,
				designMaxHeight : 0.95,
                  align: "center",
                  rule: "square"
			}
		}
	},
	p12918:
	{
		name : "p12918",
		stores: ["team"],
		process: "ht",
		allColors: ["black"],
		designs: ["d1","d10","d20"],
        overrides:
		{
			light: ["black"],
			dark: [""]
		},
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.5,
				designHeight : 0.3,
				designMaxWidth : 0.221122,
				designMaxHeight : 0.253788,
                  align : "bottom",
                  rule : "height"
			}
		}
	},
	p12919:
	{
		name : "p12919",
		stores: ["team"],
		process: "ht",
		allColors: ["black","navy","royal","white"],
        overrides:
		{
			light: ["royal"],
			dark: [""]
		},
		designs: ["d1","d10","d20"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.481188,
				designHeight : 1 - .664394,
				designMaxWidth : 0.221122,
				designMaxHeight : 0.221122,
                  align : "bottom",
                  rule : "height"//,
                  //rotate : 49.5
			}
		}
	},
	p12940:
	{
		name : "p12940",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["royal","dark green","navy","black","maroon","burgundy","grey","kelly green"],
		//allColors: ["grey"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.38775,
				designHeight : 0.7095,
				designMaxWidth : 0.0825,
				designMaxHeight : 0.082,
                  rule: "square",
                  align: "center"
			},
            "grey" :
			{
				name : "grey",
				designCenter : 0.54575,
				designHeight : 0.807,
				designMaxWidth : 0.0915,
				designMaxHeight : 0.092,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12941:
	{
		name : "p12941",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["royal","burgundy","navy","black"],
		//allColors: ["grey"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.384,
				designHeight : 0.7205,
				designMaxWidth : 0.076,
				designMaxHeight : 0.0745,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12942:
	{
		name : "p12942",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["dark green","kelly green","black","navy","grey","royal"],
		//allColors: ["grey"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.314521,
				designHeight : 0.732576,
				designMaxWidth : 0.067987,
				designMaxHeight : 0.079545,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12943:
	{
		name : "p12943",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["grey","royal","white","navy","black","red"],
		//allColors: ["grey"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.342,
				designHeight : 0.695,
				designMaxWidth : 0.068,
				designMaxHeight : 0.068,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12947:
	{
		name : "p12947",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","navy","royal","maroon","white","grey","black","dark green"],
		//allColors: ["grey"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.493056,
				designHeight : 0.805556,
				designMaxWidth : 0.071296,
				designMaxHeight : 0.078296,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12948:
	{
		name : "p12948",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["royal","charcoal","orange","gold","dark green","maroon","red","white","navy","black"],
		//allColors: ["grey"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.360208,
				designHeight : 0.77125,
				designMaxWidth : 0.084583,
				designMaxHeight : 0.085833,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12949:
	{
		name : "p12949",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["navy","royal","dark green","charcoal","maroon","red","white"],
		//allColors: ["grey"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.400417,
				designHeight : 0.6375,
				designMaxWidth : 0.065833,
				designMaxHeight : 0.064583,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12950:
	{
		name : "p12950",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","navy","royal","maroon","white","grey","black"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.432013,
				designHeight : 0.811364,
				designMaxWidth : 0.053465,
				designMaxHeight : 0.053465,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12952:
	{
		name : "p12952",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["maroon","red","white","black","navy","purple","royal","charcoal","dark green"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.407292,
				designHeight : 0.65625,
				designMaxWidth : 0.062917,
				designMaxHeight : 0.06375,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12959:
	{
		name : "p12959",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["grey","black","navy"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.371617,
				designHeight : 0.591667,
				designMaxWidth : 0.052805,
				designMaxHeight : 0.060606,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p12974:
	{
		name : "p12974",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["maroon","red","navy","royal","black","grey"],
		//allColors: ["grey"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.392917,
				designHeight : 0.74125,
				designMaxWidth : 0.075,
				designMaxHeight : 0.07375,
                  rule: "square",
                  align: "center"
			}
		}
	},
    p2667 :
	{
		name : "p2667",
		stores: [],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["athletic gold"],
		designs : ["team","mascot"],
		designLocationInformation :
	{"vegas" :
			{
				name : "vegas",
				designCenter : 0.5136365,
				designHeight : 0.741818,
				designMaxWidth : 0.067273,
				designMaxHeight : 0.067273
			}
		}
	},
    p2668 :
	{
		name : "p2668",
		stores: [],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","maroon","athletic gold","navy"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
			"cardinal" :
			{
				name : "cardinal",
				designCenter : 0.4827275,
				designHeight : 0.721818,
				designMaxWidth : 0.067273,
				designMaxHeight : 0.067273
			},
			"navy" :
			{
				name : "navy",
				designCenter : 0.5827275,
				designHeight : 0.723636,
				designMaxWidth : 0.067273,
				designMaxHeight : 0.067273
			},
			"maroon" :
			{
				name : "maroon",
				designCenter : 0.5700005,
				designHeight : 0.721818,
				designMaxWidth : 0.067273,
				designMaxHeight : 0.067273
			},
			"vegas" :
			{
				name : "vegas",
				designCenter : 0.5772725,
				designHeight : 0.729091,
				designMaxWidth : 0.067273,
				designMaxHeight : 0.067273
			},
			"red" :
			{
				name : "red",
				designCenter : 0.5500005,
				designHeight : 0.738182,
				designMaxWidth : 0.067273,
				designMaxHeight : 0.067273
			}
		}
	},
	p2715 :
	{
		name : "p2715",
		stores: [],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","yellow","royal","navy","black","white"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
            "all" :
			{
				name : "all",
				designCenter : 0.53,
				designHeight : 0.712727,
				designMaxWidth : 0.063636,
				designMaxHeight : 0.063636
			}
		}
	},
	p2716 :
	{
		name : "p2716",
		stores: [],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","royal","black","white"],
		designs : ["team","mascot"],
		designLocationInformation :
	{
			"all" :
			{
				name : "all",
				designCenter : 0.5390915,
				designHeight : 0.712727,
				designMaxWidth : 0.067273,
				designMaxHeight : 0.067273
			}
		}
	},
	p3198:
	{
		name : "p3198",
		stores: [],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","dark green","royal","navy","purple","grey"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.2,
				designHeight : 0.2,
				designMaxWidth : 0.2,
				designMaxHeight : 0.2
			}
		}
	},
	p5114 :
	{
		name : "p5114",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","maroon","dark green","royal","navy","purple","black","grey","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.561386,
				designHeight : 0.778788,
				designMaxWidth : 0.057426,
				designMaxHeight : 0.065909,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p5125: //adidas unstructured cap 2
	{
		name : "p5125",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","athletic gold","dark green","royal","navy","purple","black","white","orange"],
		designs: ["headwear","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.3643565,
				designHeight : 0.616364,
                  designMaxWidth : 0.263956,
				designMaxHeight : 0.225211,
				//designMaxHeight : 0.179211,
                  align: "bottom",
                  rule : "height"
			}
		}
	},
	p5128: //adidas structured cap 2
	{
		name : "p5128",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","athletic gold","dark green","royal","navy","purple","black","grey","white","orange"],
		designs: ["headwear","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.369505,
				designHeight : 0.616987,
				designMaxWidth : 0.283956,
				designMaxHeight : 0.220211,
				//designMaxHeight : 0.179211,
                  rule : "height",
                  align: "bottom"
			}
		}
	},
	p5131:
	{
		name : "p5131",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","athletic gold","dark green","navy","purple","black","grey","white","orange","royal"],
		designs: ["headwear","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.409341,
				designHeight : 0.583596,
				designMaxWidth : 0.403956,
				designMaxHeight : 0.208202,
                  //align: "bottom",
                  rule : "height"
			}
		}
	},
	p5546:
	{
		name : "p5546",
		stores: ["team"],
		process: "sub",
		allColors: ["white"],
		designs: ["d1","d2","d5","d20"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.528053,
				designHeight : 0.529545,
				designMaxWidth : 0.5212,
				designMaxHeight : 0.397727,
                  align: "center"
			}
		}
	},
	p5701: //Short Sleeve Logo Tee
	{
		name : "p5701",
		stores: ["team"],
		process: "dtg",
		allColors: ["red","maroon","athletic gold","dark green","royal","navy","purple","black","grey","white","orange"],
		designs: ["d1","d2","d3","d19"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.508242,
				designHeight : 0.858044,
				designMaxWidth : 0.294,
				designMaxHeight : 0.236593
			}
		}
	},
	p5764:
	{
		name : "p5764",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: ["red","athletic gold","dark green","royal","navy","orange"],
			dark: [""]
		},
		allColors: ["red","athletic gold","dark green","royal","navy","black","white","orange"],
		designs: ["headwear","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.385989,
				designHeight : .595442,
                  designMaxWidth : 0.303956,
				designMaxHeight : 0.229211,
				//designMaxHeight : 0.179211,
                  align: "bottom",
                  rule : "height"
			}
		}
	},
	p5972:
	{
		name : "p5972",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","navy","black","grey","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.445875,
				designHeight : 0.767424,
				designMaxWidth : 0.057426,
				designMaxHeight : 0.057426,
                  rule: "square"
			},
             "white" :
			{
				name : "white",
				designCenter : 0.62495,
				designHeight : 0.731061,
				designMaxWidth : 0.057426,
				designMaxHeight : 0.057426,
                  rule: "square"
			},
             "black" :
			{
				name : "black",
				designCenter : 0.60099,
				designHeight : 0.805303,
				designMaxWidth : 0.066667,
				designMaxHeight : 0.076515,
                  rule: "square"
			},
             "navy" :
			{
				name : "navy",
				designCenter : 0.438614,
				designHeight : 0.758333,
				designMaxWidth : 0.057426,
				designMaxHeight : 0.057426,
                  rule: "square"
			},
            "grey" :
			{
				name : "grey",
				designCenter : 0.388449,
				designHeight : 0.752273,
				designMaxWidth : 0.057426,
				designMaxHeight : 0.057426,
                  rule: "square"
			}
		}
	},
	p6019 : //climalite Fielder's Choice Convertible Jacket
	{
		name : "p6019",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","maroon","dark green","navy","purple","black","grey","green","royal"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.341914,
				designHeight : 0.784091,
				designMaxWidth : 0.069967,
				designMaxHeight : 0.080303,
                  rule: "square",
                  align: "center"
			},
			"dark green" :
			{
				name : "dark green",
				designCenter : 0.2,
				designHeight : 0.2,
				designMaxWidth : 0.2,
				designMaxHeight : 0.2,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6143 :
	{
		name : "p6143",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","grey"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.442574,
				designHeight : 0.812303,
				designMaxWidth : 0.067987,
				designMaxHeight : 0.07803,
                  rule: "square",
                  align: "center"
			},
             "grey" :
			{
				name : "grey",
				designCenter : 0.443234,
				designHeight : 0.812818,
				designMaxWidth : 0.069307,
				designMaxHeight : 0.079545,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6145 : //Club Short Sleeve Wind Jacket
	{
		name : "p6145",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","navy","black","grey","white"],
		designs : ["team","mascot"],
		designLocationInformation :
         {
            "all" :
			{
				name : "all",
				designCenter : 0.472937,
				designHeight : 0.812727,
				designMaxWidth : 0.073548,
				designMaxHeight : 0.085152,
                  rule: "square",
                  align: "center"
             },
             "white" :
			{
				name : "all",
				designCenter : 0.452937,
				designHeight : 0.812727,
				designMaxWidth : 0.073548,
				designMaxHeight : 0.085152,
                  rule: "square",
                  align: "center"
             }
        }
    },
	p6147 :
	{
		name : "p6147",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","navy","black","white"],
		designs : ["team","mascot"],
		designLocationInformation :
         {
            "all" :
			{
				name : "all",
				designCenter : 0.60231,
				designHeight : 0.799242,
				designMaxWidth : 0.065347,
				designMaxHeight : 0.075,
                  rule: "square",
                  align: "center"
             }
        }
    },
	p6361 : //Club Wind Vest
	{
		name : "p6361",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","navy","grey"],
		designs : ["team","mascot"],
		designLocationInformation :
        {
             "navy" :
			{
				name : "navy",
				designCenter : 0.430693,
				designHeight : 0.810606,
				designMaxWidth : 0.074587,
				designMaxHeight : 0.085606,
                  rule: "square",
                  align: "center"
			},
			"grey" :
			{
				name : "grey",
				designCenter : 0.458086,
				designHeight : 0.819697,
				designMaxWidth : 0.076568,
				designMaxHeight : 0.087879,
                  rule: "square",
                  align: "center"
			},
			"red" :
			{
				name : "red",
				designCenter : 0.443894,
				designHeight : 0.813636,
				designMaxWidth : 0.074587,
				designMaxHeight : 0.085606,
                  rule: "square"
			}
		}
	},
	p5972 :
	{
		name : "p5972",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","navy","black","grey","white"],
		designs : ["team","mascot"],
		designLocationInformation :
            {
			"navy" :
			{
				name : "navy",
				designCenter : 0.417162,
				designHeight : 0.77803,
				designMaxWidth : 0.048185,
				designMaxHeight : 0.048185,
                  rule: "square"
			},
			"red" :
			{
				name : "red",
				designCenter : 0.417162,
				designHeight : 0.77803,
				designMaxWidth : 0.048185,
				designMaxHeight : 0.048185,
                  rule: "square"
			},
			"black" :
			{
				name : "black",
				designCenter : 0.587459,
				designHeight : 0.796212,
				designMaxWidth : 0.056106,
				designMaxHeight : 0.056106,
                  rule: "square"
			},
			"white" :
			{
				name : "white",
				designCenter : 0.578218,
				designHeight : 0.831061,
				designMaxWidth : 0.056106,
				designMaxHeight : 0.056106,
                  rule: "square"
			},
			"grey" :
			{
				name : "grey",
				designCenter : 0.40396,
				designHeight : 0.850758,
				designMaxWidth : 0.052145,
				designMaxHeight : 0.052145,
                  rule: "square"
			}
		}
	},
	p6368 :
	{
		name : "p6368",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","orange","dark green","navy","grey","white","black"],
		designs : ["team","mascot"],
		designLocationInformation :
         {
            "all" :
			{
				name : "all",
				designCenter : 0.377228,
				designHeight : 0.72197,
				designMaxWidth : 0.074587,
				designMaxHeight : 0.085606,
                  rule: "square",
                  align: "center"
             }
        }
    },
	p6412 :
	{
		name : "p6412",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","orange","royal","grey","white","black"],
		designs : ["team","mascot"],
		designLocationInformation :
         {
            "all" :
			{
				name : "all",
				designCenter : 0.60231,
				designHeight : 0.796212,
				designMaxWidth : 0.071947,
				designMaxHeight : 0.082576,
                  rule: "square",
                  align: "center"
             }
        }
    },
	p6415 :
	{
		name : "p6415",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","dark green","navy","black","grey","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.437294,
				designHeight : 0.813636,
				designMaxWidth : 0.074587,
				designMaxHeight : 0.085606,
                  rule: "square",
                  align: "center"
			},
			"black" :
			{
				name : "all",
				designCenter : 0.440264,
				designHeight : 0.806818,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			},
			"navy" :
			{
				name : "navy",
				designCenter : 0.445545,
				designHeight : 0.809484,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			},
			"dark green" :
			{
				name : "dark green",
				designCenter : 0.440264,
				designHeight : 0.806818,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			},
			"red" :
			{
				name : "red",
				designCenter : 0.450825,
				designHeight : 0.812879,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6419 :
	{
		name : "p6419",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["purple","black"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.4, //too far to the right designCenter : 0.38822,
				designHeight : 0.810514,
				designMaxWidth : 0.063187,
				designMaxHeight : 0.067278,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6439:
	{
		name : "p6439",
		stores: ["emb"],
		process: "ht",
		allColors: ["black"],
		designs: ["d1","d10","d20"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.2,
				designHeight : 0.2,
				designMaxWidth : 0.2,
				designMaxHeight : 0.2,
                  align : "bottom",
                  rule : "height"
			}
		}
	},
	p6442:
	{
		name : "p6442",
		stores: ["emb"],
		process: "ht",
		allColors: ["black","navy","royal"],
		designs: ["d1","d10","d20"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.2,
				designHeight : 0.2,
				designMaxWidth : 0.2,
				designMaxHeight : 0.2,
                  align : "bottom",
                  rule : "height"
			}
		}
	},
	p6480:
	{
		name : "p6480",
		stores: ["emb"],
		process: "ht",
		allColors: ["black"],
		designs: ["d1","d10","d20"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.2,
				designHeight : 0.2,
				designMaxWidth : 0.2,
				designMaxHeight : 0.2,
                  align : "bottom",
                  rule : "height"
			}
		}
	},
	p6489 :
	{
		name : "p6489",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","maroon","dark green","black"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.372253,
				designHeight : 0.816514,
				designMaxWidth : 0.063187,
				designMaxHeight : 0.067278,
                  rule: "square",
                  align: "center"
               }
		}
	},
	p6490 :
	{
		name : "p6490",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","orange","dark green","royal","navy","purple","black","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.311551,
				designHeight : 0.816667,
				designMaxWidth : 0.067327,
				designMaxHeight : 0.077273,
                  rule: "square",
                  align: "center"
               }
		}
	},
	p6491 :
	{
		name : "p6491",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","orange","athletic gold","dark green","royal","navy","purple","black"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.307261,
				designHeight : 0.784091,
				designMaxWidth : 0.065327,
				designMaxHeight : 0.075273,
                  rule: "square",
                  align: "center"
               }
		}
	},
	p6492 :
	{
		name : "p6492",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: ["all"],
			dark: [""]
		},
		allColors: ["red","orange","athletic gold","dark green","royal","navy","purple","black"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.307261,
				designHeight : 0.784091,
				designMaxWidth : 0.057106,
				designMaxHeight : 0.080303,
                  rule: "square",
                  align: "center"
               }
		}
	},
	p6499 :
	{
		name : "p6499",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","maroon","yellow","dark green","royal","navy","purple","black","white","orange","athletic gold"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.3655, //too far to the left designCenter : 0.355116,
				designHeight : 0.742, //too high designHeight : 0.75303,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6503:
	{
		name : "p6503",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["royal","grey","black"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.383242,
				designHeight : 0.82263,
				designMaxWidth : 0.063187,
				designMaxHeight : 0.067278,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6518:
	{
		name : "p6518",
		stores: ["team"],
		process: "dtg",
		allColors: ["red","royal","navy","black","grey","charcoal"],
		designs: ["d1","d2","d3","d19"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.4999995,
				designHeight : 0.780,
				designMaxWidth : 0.29,
				designMaxHeight : 0.270455
			}
		}
	},
	p6528:
	{
		name : "p6528",
		stores: [""],
		process: "ht",
		allColors: ["navy","royal"],
		designs: ["d1","d10","d20"],
        overrides:
		{
			light: ["navy","royal"],
			dark: [""]
		},
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.5,
				designHeight : 0.314142,
				designMaxWidth : 0.213201,
				designMaxHeight : 0.244697,
                  align : "bottom"
			}
		}
	},
	p6530:
	{
		name : "p6530",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["black","grey","navy","red","royal","white"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.305611,
				designHeight : 0.821212,
				designMaxWidth : 0.069967,
				designMaxHeight : 0.078788,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6559 :
	{
		name : "p6559",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","maroon","dark green","royal","navy","purple","black","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.437393,
				designHeight : 0.739394,
				designMaxWidth : 0.058746,
				designMaxHeight : 0.056746,
                  rule: "square"
			}
		}
	},
	p6560: //Camo Streak Hat
	{
		name : "p6560",
		stores: [""],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["royal","red","navy","black","grey"],
		designs: ["headwear","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.4336633,
				designHeight : 0.610303,
				designMaxWidth : 0.479208,
				designMaxHeight : 0.250091,
				//designMaxHeight : 0.179091,
                  align: "bottom",
                  rule : "height"

			}
		}
	},
	p6561: //Carbon Fiber Hat
	{
		name : "p6561",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","orange","gold","dark green","black"],
		designs: ["headwear","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.422442,
				designHeight : 0.580394,
				designMaxWidth : 0.444884,
				designMaxHeight : 0.280909,
                  rule : "height",
                  align: "bottom"
			}
		}
	},
	p6566 :
	{
		name : "p6566",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","dark green","royal","navy","purple","black","white","orange"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.59604,
				designHeight : 0.795455,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6571 :
	{
		name : "p6571",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","dark green","royal","navy","black","white","grey"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.60066,
				designHeight : 0.787273,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			},
              "grey" :
              {
				name : "all",
				designCenter : 0.591749,
				designHeight : 0.75303,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
              }
		}
	},
	p6576 :
	{
		name : "p6576",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
         allColors: ["yellow","dark green","royal","purple","black","orange","burgundy","pink"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.58868,
				designHeight : 0.781818,
				designMaxWidth : 0.069726,
				designMaxHeight : 0.082576,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6580 :
	{
		name : "p6580",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["royal","navy","purple","black","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.5877885,
				designHeight : 0.775,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6581 :
	{
		name : "p6581",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["black","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.59736,
				designHeight : 0.768939,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p7595:
	{
		name : "p7595",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["red","dark green","navy","black","grey","khaki"],
		designs: ["headwear","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.383242,
				designHeight : 0.640379,
				designMaxWidth : 0.414835,
				designMaxHeight : 0.24183,
                  rule : "height",
                  align: "bottom"
			}
		}
	},
	p12909:
	{
		name : "p12909",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.463696,
				designHeight : 0.3,
				designMaxWidth : 0.090429,
				designMaxHeight : 0.103788,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p7608: //project(s)
	{
		name : "p7608",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.589286,
				designHeight : 0.435331,
				designMaxWidth : 0.228022,
				designMaxHeight : 0.26183,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p8612: //project(a)
	{
		name : "p8612",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.589286,
				designHeight : 0.435331,
				designMaxWidth : 0.228022,
				designMaxHeight : 0.26183,
                  align: "center",
                  rule: "hypotenuse"
			}
		}
	},
	p9646:
	{
		name : "p9646",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","yellow","dark green","royal","navy","purple","black","grey","white","orange"],
		designs: ["team","mascot"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.558416,
				designHeight : 0.8,
				designMaxWidth : 0.071287,
				designMaxHeight : 0.081818,
                  rule: "square",
                  align: "center"
			}
		}
	},
    p9647 :
	{
		name : "p9647",
		stores: [],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: [""]
		},
		allColors: ["black","grey","navy","white"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.5174915,
				designHeight : 0.766667,
				designMaxWidth : 0.067327,
				designMaxHeight : 0.067327
             },
            "grey" :
			{
				name : "grey",
				designCenter : 0.5161715,
				designHeight : 0.759091,
				designMaxWidth : 0.067327,
				designMaxHeight : 0.067327
             },
			"navy" :
			{
				name : "navy",
				designCenter : 0.5188125,
				designHeight : 0.759091,
				designMaxWidth : 0.759091,
				designMaxHeight : 0.759091
             }
         }
    },
    p9648 :
	{
		name : "p9648",
		stores: ["team"],
		process: "emb",
		overrides:
		{
			light: [""],
			dark: ["grey"]
		},
		allColors: ["red","maroon","athletic gold","dark green","royal","navy","black","grey","white","orange"],
		designs : ["team","mascot"],
		designLocationInformation :
		{
			"all" :
			{
				name : "all",
				designCenter : 0.411881,
				designHeight : 0.818939,
				designMaxWidth : 0.066007,
				designMaxHeight : 0.075758,
                  rule: "square",
                  align: "center"
             }
         }
    },
	p12937: //Club Cover
	{
		name : "p12937",
		stores: ["team"],
		process: "ht",
		overrides:
		{
			light: ["all"],
			dark: [""]
		},
		allColors: ["black","navy","royal","red","purple"],
		designs: ["d1"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
				designCenter : 0.277888,
				designHeight : 0.863636,
				designMaxWidth : 0.368317,
				designMaxHeight : 0.422727,
                  align : "center",
                  rule: "hypotenuse"
			}
		}
	},
	p12994: //PitchFix Fusion
	{
		name : "p12994",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
            "all" :
            {
                  name : "multiLocations-first",
				designCenter : 0.330363,
				designHeight : 0.239394,
				designMaxWidth : 0.153795,
				designMaxHeight : 0.176515,
                  align : "center",
                  rule: "hypotenuse"
            },
            "secondLocation" :
            {
                  name : "multiLocations-second",
				designCenter : 0.670297,
				designHeight : 0.240152,
				designMaxWidth : 0.153795,
				designMaxHeight : 0.176515,
                  align : "center",
                  rule: "hypotenuse"
            }
		}
	},
	p12993: //PitchFix Hybrid
	{
		name : "p12993",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
            "all" :
            {
                  name : "multiLocations-first",
				designCenter : 0.340594,
				designHeight : 0.224242,
				designMaxWidth : 0.146535,
				designMaxHeight : 0.168182,
                  align : "center",
                  rule: "hypotenuse"
            },
            "secondLocation" :
            {
                  name : "multiLocations-second",
				designCenter : 0.662046,
				designHeight : 0.225758,
				designMaxWidth : 0.146535,
				designMaxHeight : 0.168182,
                  align : "center",
                  rule: "hypotenuse"
            }
		}
	},
	p12996: //PitchFix Original
	{
		name : "p12996",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
            "all" :
            {
                  name : "multiLocations-first",
				designCenter : 0.342574,
				designHeight : 0.22803,
				designMaxWidth : 0.146535,
				designMaxHeight : 0.168182,
                  align : "center",
                  rule: "hypotenuse"
            },
            "secondLocation" :
            {
                  name : "multiLocations-second",
				designCenter : 0.660066,
				designHeight : 0.229545,
				designMaxWidth : 0.146535,
				designMaxHeight : 0.168182,
                  align : "center",
                  rule: "hypotenuse"
            }
		}
	},
	p12997: //PitchFix Multimarker
	{
		name : "p12997",
		stores: ["team"],
		process: "uv",
		allColors: ["white"],
		designs: ["d1","d6","d7"],
		designLocationInformation:
		{
            "all" :
            {
                  name : "all",
				designCenter : 0.244224,
				designHeight : 0.620455,
				designMaxWidth : 0.207261,
				designMaxHeight : 0.237879,
                  align : "center",
                  rule: "hypotenuse"
            }
		}
	}
}
