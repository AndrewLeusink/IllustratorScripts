
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
         designs : ["d9","d11","d15","d22"],
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
                                designCenter : 0.570557,
                                designHeight : 0.798627,
                                designMaxWidth : 0.091533,
                                designMaxHeight : 0.089245,
                  rule: "square",
                  align: "center"
			},
			"purple" :
			{
				name : "purple",
                                designCenter : 0.576886,
                                designHeight : 0.781431,
                                designMaxWidth : 0.113153,
                                designMaxHeight : 0.113153,
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
                                designCenter : 0.550763,
                                designHeight : 0.829771,
                                designMaxWidth : 0.09084,
                                designMaxHeight : 0.09084,
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
                                designCenter : 0.563218,
                                designHeight : 0.833716,
                                designMaxWidth : 0.087356,
                                designMaxHeight : 0.087356,
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
                                designCenter : 0.599617,
                                designHeight : 0.801533,
                                designMaxWidth : 0.091188,
                                designMaxHeight : 0.091188,
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
                                designCenter : 0.557736,
                                designHeight : 0.807547,
                                designMaxWidth : 0.0933585,
                                designMaxHeight : 0.09283,
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
                                designCenter : 0.55,
                                designHeight : 0.803053,
                                designMaxWidth : 0.084733,
                                designMaxHeight : 0.084733,
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
                                designCenter : 0.57931,
                                designHeight : 0.784674,
                                designMaxWidth : 0.099617,
                                designMaxHeight : 0.100383,
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
                                designCenter : 0.635632,
                                designHeight : 0.784674,
                                designMaxWidth : 0.089655,
                                designMaxHeight : 0.089655,
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
                                designCenter : 0.595402,
                                designHeight : 0.813793,
                                designMaxWidth : 0.095019,
                                designMaxHeight : .095785,
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
                                designCenter : 0.564504,
                                designHeight : 0.803817,
                                designMaxWidth : 0.098473,
                                designMaxHeight : 0.098473,
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
                                designCenter : 0.55229,
                                designHeight : 0.809924,
                                designMaxWidth : 0.081679,
                                designMaxHeight : 0.081679,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.215472,
                                designHeight : 0.822642,
                                designMaxWidth : 0.198491,
                                designMaxHeight : 0.198497,
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
                                designCenter : 0.587786,
                                designHeight : 0.79893,
                                designMaxWidth : 0.077863,
                                designMaxHeight : 0.077863,
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
                                designCenter : 0.580916,
                                designHeight : 0.787023,
                                designMaxWidth : 0.080916,
                                designMaxHeight : 0.080916,
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
                                designCenter : 0.552672,
                                designHeight : 0.810687,
                                designMaxWidth : 0.082443,
                                designMaxHeight : 0.082443,
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
                                designCenter : 0.630268,
                                designHeight : 0.851341,
                                designMaxWidth : 0.097318,
                                designMaxHeight : 0.097318,
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
                                designCenter : 0.558015,
                                designHeight : 0.836641,
                                designMaxWidth : 0.082443,
                                designMaxHeight : 0.082443,
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
			"all" :
			{
				name : "all",
                                designCenter : 0.635249,
                                designHeight : 0.789272,
                                designMaxWidth : 0.098084,
                                designMaxHeight : 0.098084,
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
                                designCenter : 0.56374,
                                designHeight : 0.808397,
                                designMaxWidth : 0.101527,
                                designMaxHeight : 0.101527,
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
                                designCenter : 0.547328,
                                designHeight : 0.807634,
                                designMaxWidth : 0.091603,
                                designMaxHeight : 0.091603,
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
                                designCenter : 0.552453,
                                designHeight : 0.792453,
                                designMaxWidth : 0.093585,
                                designMaxHeight : 0.093585,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.457854,
                                designHeight : 0.29272,
                                designMaxWidth : 0.09272,
                                designMaxHeight : 0.09272,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.499617,
                                designHeight : 0.288123,
                                designMaxWidth : 0.085824,
                                designMaxHeight : 0.085824,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.459004,
                                designHeight : 0.289655,
                                designMaxWidth : 0.082759,
                                designMaxHeight : 0.081992,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.500766,
                                designHeight : 0.281226,
                                designMaxWidth : 0.077395,
                                designMaxHeight : 0.078161,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.659211,
                                designHeight : 0.476316,
                                designMaxWidth : 0.289474,
                                designMaxHeight : 0.289474,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.659211,
                                designHeight : 0.476316,
                                designMaxWidth : 0.289474,
                                designMaxHeight : 0.289474,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.659211,
                                designHeight : 0.476316,
                                designMaxWidth : 0.289474,
                                designMaxHeight : 0.289474,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.659211,
                                designHeight : 0.476316,
                                designMaxWidth : 0.289474,
                                designMaxHeight : 0.289474,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.659211,
                                designHeight : 0.476316,
                                designMaxWidth : 0.289474,
                                designMaxHeight : 0.289474,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.659211,
                                designHeight : 0.476316,
                                designMaxWidth : 0.289474,
                                designMaxHeight : 0.289474,
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
                                designCenter : 0.534483,
                                designHeight : 0.822222,
                                designMaxWidth : 0.09272,
                                designMaxHeight : 0.09272,
                  rule: "square",
                  align: "center"
			}
		}
	},
	p6215:
	{
		name : "p6215",
		stores: [""],
		process: "ht",
		allColors: ["royal","black","grey","navy"],
		designs: ["d9","d11","d15","d22"],
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
                                designCenter : 0.541221,
                                designHeight : 0.822901,
                                designMaxWidth : 0.08855,
                                designMaxHeight : 0.08855,
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
                                designCenter : 0.597701,
                                designHeight : 0.822222,
                                designMaxWidth : 0.082759,
                                designMaxHeight : 0.081992,
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
		designs: ["d9","d11","d15","d22"],
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.535323,
                                designHeight : 0.333333,
                                designMaxWidth : 0.111443,
                                designMaxHeight : 0.111443,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.535323,
                                designHeight : 0.333333,
                                designMaxWidth : 0.111443,
                                designMaxHeight : 0.111443,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.535323,
                                designHeight : 0.333333,
                                designMaxWidth : 0.111443,
                                designMaxHeight : 0.111443,
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
		designs: ["d1","d10"],//,"d20"],
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
                                designCenter : 0.495402,
                                designHeight : 0.298851,
                                designMaxWidth : 0.334866,
                                designMaxHeight : 0.204598,
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
		designs: ["d1","d10"],//,"d20"],
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
	p12937:
	{
		name : "p12937",
		stores: ["team"],
		process: "ht",
		allColors: ["black","navy","royal","purple","red"],
        overrides:
		{
			light: ["all"],
			dark: [""]
		},
		designs: ["d1"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.268199,
                                designHeight : 0.804598,
                                designMaxWidth : 0.392337,
                                designMaxHeight : 0.388506,
                  align : "center",
                  rule : "hypotenuse"//,
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
                                designCenter : 0.55458,
                                designHeight : 0.790076,
                                designMaxWidth : 0.077099,
                                designMaxHeight : 0.076336,
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
                                designCenter : 0.538931,
                                designHeight : 0.79084,
                                designMaxWidth : 0.079389,
                                designMaxHeight : 0.079389,
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
                                designCenter : 0.540076,
                                designHeight : 0.784733,
                                designMaxWidth : 0.084733,
                                designMaxHeight : 0.084733,
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
                                designCenter : 0.529771,
                                designHeight : 0.816794,
                                designMaxWidth : 0.080916,
                                designMaxHeight : 0.080916,
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
                                designCenter : 0.639171,
                                designHeight : 0.802765,
                                designMaxWidth : 0.085714,
                                designMaxHeight : 0.085714,
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
                                designCenter : 0.528244,
                                designHeight : 0.819847,
                                designMaxWidth : 0.085496,
                                designMaxHeight : 0.085496,
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
                                designCenter : 0.579389,
                                designHeight : 0.823664,
                                designMaxWidth : 0.09313,
                                designMaxHeight : 0.09313,
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
                                designCenter : 0.632567,
                                designHeight : 0.82069,
                                designMaxWidth : 0.083525,
                                designMaxHeight : 0.083525,
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
                                designCenter : 0.581298,
                                designHeight : 0.787023,
                                designMaxWidth : 0.074046,
                                designMaxHeight : 0.074046,
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
                                designCenter : 0.571374,
                                designHeight : 0.80229,
                                designMaxWidth : 0.074046,
                                designMaxHeight : 0.074046,
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
                                designCenter : 0.557471,
                                designHeight : 0.800766,
                                designMaxWidth : 0.068199,
                                designMaxHeight : 0.068199,
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
                                designCenter : 0.5659,
                                designHeight : 0.812261,
                                designMaxWidth : 0.072797,
                                designMaxHeight : 0.072797,
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
		designs: ["d1","d2","d5","d20","d21","d22"],//,"d20"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.59073,
                                designHeight : 0.52597,
                                designMaxWidth : 0.64497,
                                designMaxHeight : 0.416174,
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
		designs: ["d1","d2","d3","d21","d19"],//,"d19"],
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
                                designCenter : 0.543295,
                                designHeight : 0.801533,
                                designMaxWidth : 0.076628,
                                designMaxHeight : 0.076628,
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
                                designCenter : 0.625287,
                                designHeight : 0.802299,
                                designMaxWidth : 0.079693,
                                designMaxHeight : 0.079693,
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
                                designCenter : 0.626054,
                                designHeight : 0.813027,
                                designMaxWidth : 0.084291,
                                designMaxHeight : 0.084291,
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
             "all" :
			{
				name : "all",
                                designCenter : 0.627099,
                                designHeight : 0.81145,
                                designMaxWidth : 0.08626,
                                designMaxHeight : 0.08626,
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
                                designCenter : 0.635632,
                                designHeight : 0.793103,
                                designMaxWidth : 0.08659,
                                designMaxHeight : 0.08659,
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
                                designCenter : 0.623282,
                                designHeight : 0.805344,
                                designMaxWidth : 0.081679,
                                designMaxHeight : 0.081679,
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
		designs: ["d1","d10","d20","d22"],//,"d20"],
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
		designs: ["d1","d10"],//,"d20"],
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
		designs: ["d1","d10"],//,"d20"],
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
                                designCenter : 0.498092,
                                designHeight : 0.807634,
                                designMaxWidth : 0.081679,
                                designMaxHeight : 0.081679,
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
                                designCenter : 0.490805,
                                designHeight : 0.797701,
                                designMaxWidth : 0.081992,
                                designMaxHeight : 0.081992,
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
                                designCenter : 0.490805,
                                designHeight : 0.797701,
                                designMaxWidth : 0.081992,
                                designMaxHeight : 0.081992,
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
                                designCenter : 0.573664,
                                designHeight : 0.750382,
                                designMaxWidth : 0.081679,
                                designMaxHeight : 0.081679,
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
		designs: ["d1","d2","d3","d19","d21"],//,"d19"],
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
		designs: ["d1","d10"],//,"d20"],
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
                                designCenter : 0.506897,
                                designHeight : 0.806897,
                                designMaxWidth : 0.081992,
                                designMaxHeight : 0.081992,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.460153,
                                designHeight : 0.28057,
                                designMaxWidth : 0.081992,
                                designMaxHeight : 0.081992,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.659211,
                                designHeight : 0.476316,
                                designMaxWidth : 0.289474,
                                designMaxHeight : 0.289474,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
			"all" :
			{
				name : "all",
                                designCenter : 0.635197,
                                designHeight : 0.478947,
                                designMaxWidth : 0.309868,
                                designMaxHeight : 0.309868,
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
                                designCenter : 0.5659,
                                designHeight : 0.805364,
                                designMaxWidth : 0.085057,
                                designMaxHeight : 0.085057,
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
                                designCenter : 0.537023,
                                designHeight : 0.814504,
                                designMaxWidth : 0.081679,
                                designMaxHeight : 0.081679,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
            "all" :
            {
                  name : "multiLocations-first",
				designCenter : 0.306513,
				designHeight : 0.242912,
				designMaxWidth : 0.182375,
				designMaxHeight : 0.182375,
                  align : "center",
                  rule: "hypotenuse"
            },
            "secondLocation" :
            {
                  name : "multiLocations-second",
				designCenter : 0.695785,
				designHeight : 0.243678,
				designMaxWidth : 0.182375,
				designMaxHeight : 0.182375,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
            "all" :
            {
                  name : "multiLocations-first",
				designCenter : 0.317241,
				designHeight : 0.249212,
				designMaxWidth : 0.182375,
				designMaxHeight : 0.182375,
                  align : "center",
                  rule: "hypotenuse"
            },
            "secondLocation" :
            {
                  name : "multiLocations-second",
				designCenter : 0.685824,
				designHeight : 0.228352,
				designMaxWidth : 0.171648,
				designMaxHeight : 0.171648,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
            "all" :
            {
                  name : "multiLocations-first",
				designCenter : 0.320307,
				designHeight : 0.231418,
				designMaxWidth : 0.17318,
				designMaxHeight : 0.17318,
                  align : "center",
                  rule: "hypotenuse"
            },
            "secondLocation" :
            {
                  name : "multiLocations-second",
				designCenter : 0.685057,
				designHeight : 0.232184,
				designMaxWidth : 0.17318,
				designMaxHeight : 0.17318,
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
		designs: ["d1","d6","d7","d22"],
		designLocationInformation:
		{
            "all" :
            {
                  name : "all",
                                designCenter : 0.245211,
                                designHeight : 0.60613,
                                designMaxWidth : 0.209962,
                                designMaxHeight : 0.209965,
                  align : "center",
                  rule: "hypotenuse"
            }
		}
	}
}