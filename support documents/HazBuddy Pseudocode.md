BEGIN
    
    Step 1: Shipper
        Enter address and telephone number where hazardous material was certified

    Step 2: Consignee
        Enter six-digit DODAAC and/or in-the-clear geographical location of ultimate consignee or "Worldwide Mobility"
        IF infectious substances THEN
            Enter name and telephone number of responsible person for emergency contact

    Step 3: Air Waybill No.
        Enter aircraft manifest number (optional, may be entered by accepting operator or left blank)

    Step 4: Page...of...Pages
        Enter page number and total number of pages
        IF no extension pages THEN
            Enter "Page 1 of 1 Pages" or leave blank

    Step 5: Shipper's Reference Number
        Enter 17-character transportation control number (TCN)

    Step 6: Optional Block
        Inspection activity annotates date of inspection and acceptance for air movement
        Shipper unit cargo identification information may also be entered

    Step 7: Shipment Within Passenger Aircraft and Cargo Aircraft Limitations
        IF shipment is acceptable for both passenger and cargo aircraft THEN
            Delete "Cargo Aircraft Only"
        ELSE IF shipment is allowed only by cargo aircraft THEN
            Delete "Passengers and Cargo Aircraft"
        ELSE IF shipment is certified to special approval document for Cargo Aircraft Only THEN
            Delete "Passengers and Cargo Aircraft"
        ELSE IF shipment is certified to special approval document for either Passenger Aircraft or Cargo Aircraft THEN
            Use "P" code from Table A4.1., Column 7 to determine passenger limitations
        END IF

    Step 8: Airport of Departure
        Enter three-digit Port of Embarkation (POE) and/or in-the-clear geographical location of airport of departure

    Step 9: Airport of Destination
        Enter three-digit Port of Debarkation (POD) and/or in-the-clear geographical location of airport of destination
        IF applicable THEN
            Enter "Worldwide Mobility"

    Step 10: Shipment Type
        IF shipment contains no radioactive material THEN
            Delete "Radioactive"
        ELSE IF shipment contains radioactive material THEN
            Delete "Nonradioactive"

    Step 11: UN, NA, OR ID No.
        Enter UN, NA, or ID number from Table A4.1., Column 2
        IF applicable THEN
            Enter "RQ" before basic description

    Step 12: Proper Shipping Name
        Enter PSN from Table A4.1.
        IF applicable THEN
            Enter technical name in parentheses
            IF mixture or solution THEN
                Enter technical names of at least two components
            END IF
            IF toxic by inhalation THEN
                Enter "TOXIC-INHALATION HAZARD" and appropriate zone
            END IF
            IF hazardous waste THEN
                Enter "Waste" before PSN
            END IF
            IF empty packaging with residue THEN
                Enter "EMPTY UNCLEANED" or "RESIDUE LAST CONTAINED"
            END IF

    Step 13: Class and Division
        Enter hazard class and division number from Table A4.1., Column 4
        IF Class 1 material THEN
            Enter hazard class, division, and compatibility group
        END IF
        IF additional information from DOD JHCS or classification approval THEN
            Enter on separate line or in Step 19
        END IF

    Step 14: Subsidiary hazard
        Enter subsidiary hazard from Table A4.1., Column 5 in parentheses
        IF subsidiary hazard from other source THEN
            Annotate source in Step 19
        END IF

    Step 15: Packing Group
        Enter applicable Packing Group (PG) from Table A4.1., Column 6

    Step 16: Quantity and Type of Packing
        Enter number of packages and type of packaging
        Enter weight, volume, or other applicable measure of hazardous material
        Enter net quantity in metric units (optional: equivalent English units in parentheses)
        IF explosives THEN
            Enter Transportation "Net Explosive Weight (NEW)" in metric weight
        END IF
        IF limited quantity THEN
            Enter type of package and net weight or gross weight with "G"
        END IF
        IF overpack used THEN
            Enter "Overpack Used"
        END IF
        IF magnetized material THEN
            Enter number and type of packaging
        END IF
        IF item is a "KIT" THEN
            Enter aggregate quantity of hazardous materials
        END IF
        IF Multiple-Element Gas Containers THEN
            Enter total number and quantity in each container
        END IF
        IF life-saving appliances THEN
            Enter specific description and number of items packaged
        END IF
        IF radioactive shipments THEN
            Enter name or symbol of radionuclide, physical and chemical form, number of packages, type of package, and activity in Becquerel or Terabecquerel
        END IF

    Step 17: Packaging Instructions
        Enter packaging paragraph from applicable reference
        IF DOT Special Permit, CAA, COE, or waiver THEN
            Cite approval number
        END IF
        IF UN packaging specification certified package overpacked THEN
            Cite A3.1.7.3. and applicable packaging paragraph
        END IF
        IF Consumer Commodities THEN
            Enter "A13.3."
        END IF
        IF Limited Quantities THEN
            Enter "A19.3"
        END IF
        IF captured ammunition or unknown characteristics THEN
            Include reference to A3.3.1.7. and applicable packaging paragraph
        END IF
        IF classified information THEN
            Comply with A17.2.7.
        END IF
        IF unpackaged explosives THEN
            Enter "A5.2."
        END IF
        IF Class 1 materials in tactical vehicle THEN
            Cite appropriate packaging reference from Attachment 5
        END IF
        IF radioactive shipments THEN
            Enter packaging paragraph, category, transport index, dimensions, fissile class, or "Fissile Exempt"
        END IF

    Step 18: Authorization
        IF nonradioactive shipments THEN
            Enter "Limited Quantity" or "LTD. QTY." if applicable
        END IF
        IF radioactive shipments THEN
            Enter Approval Identification Markings and package identification markings of relevant documents
        END IF

    Step 19: Additional Handling Information
        Enter PSN and hazard class of each accessorial hazard
        Enter quantity of each accessorial hazard in metric units (optional: U.S. standard units in parentheses)
        Enter handling instructions if specified by packaging paragraph
        IF CAA THEN
            Annotate "PACKAGING AUTHORIZED BY COMPETENT AUTHORITY OF THE UNITED STATES OF AMERICA (USA)" or other country
        END IF
        IF CAA does not have a number THEN
            Certify shipment to A5.3.
        END IF
        Enter 24-hour Emergency Response number(s)
        IF hazard class label exempted by DOT Special Permit THEN
            Annotate "Hazard Class Label exempted by DOT-SP (permit number)"
        END IF
        IF item is a kit THEN
            Enter statement: "contained in kit piece number ***"
        END IF
        IF Class 1 THEN
            Enter "Net Explosive QD Weight (NEWQD)" if different from transportation NEW
            Identify any munition or ordnance item containing OTTO Fuel II
            IF explosives installed or embedded THEN
                Use article's overall description as PSN
                Identify all installed or embedded explosive components
            END IF
            IF item contains liquid or hypergolic fuel THEN
                Enter handling statement
            END IF
            IF Grandfathered munitions THEN
                Add statement: “Government-owned goods packaged before January 1, 1990.”
            END IF
        END IF
        IF Class 2 THEN
            Add appropriate statement for shipping position
            IF fire extinguishers secured in holder THEN
                Certify fire extinguisher(s) and identify equipment
            END IF
            IF cryogenic liquids THEN
                Enter venting instructions
            END IF
        END IF
        IF Class 4 and Class 5 THEN
            Enter control and emergency temperatures
            Enter handling statement for temperature controlled materials
            IF notification or approval required THEN
                Enter statement of approval
            END IF
        END IF
        IF Class 7 THEN
            Enter statement for radioactive Category II-Yellow and Category III-Yellow
        END IF
        IF Class 9 THEN
            Enter PSN, hazard class, and net quantity of flammable fuel
            Enter PSN and hazard class for accessorial hazards
            Identify any integral installed fire suppression systems
            Identify mounted engines and generators
            Enter name and quantity of non-hazardous fuel
            IF item is drained and purged THEN
                Enter "Drained and Purged"
            END IF
            IF non-hazardous battery installed THEN
                Enter statement
            END IF
            IF technical directive used THEN
                Indicate directive
            END IF
            IF UN specification jerricans THEN
                Identify PSN, hazard class, number of jerricans, and quantity of fuel
            END IF
            IF vehicles or equipment with magnetized material THEN
                Enter "Contains Magnetized Material"
            END IF
            IF Dangerous Goods in Machinery or Apparatus THEN
                Enter PSN, hazard class, and net quantity of hazardous materials
            END IF
            IF life-saving appliances THEN
                Enter PSN and hazard class of each hazardous component
            END IF
            IF dry ice used as refrigerant THEN
                Identify dry ice as accessorial hazard
            END IF
        END IF

    Step 20: Name of Signatory
        Enter name of official signing the form
        Military rank may be included

    Step 21: Date
        Enter date material was certified

    Step 22: Signature
        Official certifies shipment complies with requirements
        Signature may be written manually, by mechanical entry, or by digital method
        Ensure individual who signs personally inspects HAZMAT item
END