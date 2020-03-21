import { AbstractSyntaxGraph, DataNode, PropertyNode } from '../abstract-syntax-graph/abstract-syntax-graph';
import { Backend } from './backend';
import { readFileSync } from 'fs';
import { Project } from '../project/project';
import { File } from '../project/file';

describe("The Backend", function () {

    let backEnd: Backend;
    let abstractSyntaxTree: AbstractSyntaxGraph;
    let data: DataNode;
    let project: Project;

    const DATA_NAME = "Shipping Information";
    const DATA_NAME_KEBAB = "shipping-information";

    beforeAll(() => {
        backEnd = new Backend();
        abstractSyntaxTree = new AbstractSyntaxGraph();
        data = new DataNode(DATA_NAME);
        data.appendChildNode(new PropertyNode("Company", PropertyNode.TYPE_TEXT));
        data.appendChildNode(new PropertyNode("First Name", PropertyNode.TYPE_TEXT));
        data.appendChildNode(new PropertyNode("Last Name", PropertyNode.TYPE_TEXT));
        data.appendChildNode(new PropertyNode("Adress", PropertyNode.TYPE_TEXT));
        data.appendChildNode(new PropertyNode("City", PropertyNode.TYPE_TEXT));
        data.appendChildNode(new PropertyNode("Postal Code", PropertyNode.TYPE_NUMBER));
        abstractSyntaxTree.appendChildNode(data);
        project = backEnd.generate(abstractSyntaxTree);
    });

    it("generates a readme", function () {
        const file = project.getChildNode('readme.md') as File;
        expect(file).toBeDefined();
        expect(file.getValue().replace(/\s+/g, ' ')).toContain(`$ ng generate @angular/material:address-form ${DATA_NAME_KEBAB}`);
    });

    it("generates a form component class", function () {
        const file = project.getChildNode(`${DATA_NAME_KEBAB}-form.component.ts`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information-form/shipping-information-form.component.ts');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a form component template", function () {
        const file = project.getChildNode(`${DATA_NAME_KEBAB}-form.component.html`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information-form/shipping-information-form.component.html');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

    it("generates a form component style", function () {
        const file = project.getChildNode(`${DATA_NAME_KEBAB}-form.component.scss`) as File;
        expect(file).toBeDefined();
        const expected = readFileSync('angular/src/app/shipping-information-form/shipping-information-form.component.scss');
        expect(file.getValue().replace(/\s+/g, ' ')).toBe(expected.toString().replace(/\s+/g, ' '));
    });

});