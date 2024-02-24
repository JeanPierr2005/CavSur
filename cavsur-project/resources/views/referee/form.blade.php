
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('name') }}</label>
    <div>
        {{ Form::text('name', $referee->name, ['class' => 'form-control' .
        ($errors->has('name') ? ' is-invalid' : ''), 'placeholder' => 'Name']) }}
        {!! $errors->first('name', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">referee <b>name</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('lastname') }}</label>
    <div>
        {{ Form::text('lastname', $referee->lastname, ['class' => 'form-control' .
        ($errors->has('lastname') ? ' is-invalid' : ''), 'placeholder' => 'Lastname']) }}
        {!! $errors->first('lastname', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">referee <b>lastname</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('document') }}</label>
    <div>
        {{ Form::text('document', $referee->document, ['class' => 'form-control' .
        ($errors->has('document') ? ' is-invalid' : ''), 'placeholder' => 'Document']) }}
        {!! $errors->first('document', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">referee <b>document</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('phone') }}</label>
    <div>
        {{ Form::text('phone', $referee->phone, ['class' => 'form-control' .
        ($errors->has('phone') ? ' is-invalid' : ''), 'placeholder' => 'Phone']) }}
        {!! $errors->first('phone', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">referee <b>phone</b> instruction.</small>
    </div>
</div>

    <div class="form-footer">
        <div class="text-end">
            <div class="d-flex">
                <a href="#" class="btn btn-danger">Cancel</a>
                <button type="submit" class="btn btn-primary ms-auto ajax-submit">Submit</button>
            </div>
        </div>
    </div>
